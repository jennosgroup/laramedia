<?php

namespace Laramedia\Support;

use Illuminate\Support\Str;
use Laramedia\Models\Media;
use Illuminate\Http\Request;
use Intervention\Image\Image;
use Laramedia\Support\Config;
use Illuminate\Support\Carbon;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManager;
use Laramedia\Resources\MediaResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class Uploader
{
    /**
     * Time instance of when the upload started.
     */
    private Carbon $date;

    /**
     * The request object.
     */
    private Request $request;

    /**
     * The configurations for the upload.
     */
    private array $config = [];

    /**
     * The visibility of the upload.
     */
    private string $visibility = 'private';

    /**
     * The validation error message.
     */
    private ?string $validationError = null;

    /**
     * Create an instance of the class.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  array  $config
     *
     * @return void
     */
    public function __construct(Request $request, array $config = [])
    {
        $this->date = now();
        $this->request = $request;
        $this->config = array_merge($this->getConfigurationDefaults(), $config);
    }

    /**
     * Set the upload visibility to public.
     *
     * @return $this
     */
    public function public(): self
    {
        $this->visibility = 'public';
        return $this;
    }

    /**
     * Set the upload visibility to private.
     *
     * @return string
     */
    public function private(): self
    {
        $this->visibility = 'private';
        return $this;
    }

    /**
     * Handle the file upload.
     *
     * @param  array  $data
     *
     * @return array
     */
    public function handle(array $data = []): array
    {
        if (! $this->isFileValid()) {
            return $this->getValidationErrorPayload();
        }

        $file = $this->getUploadFile();

        $filename = $this->makeFilenameUnique($this->getFilename($file), $file);

        if (! $uploadPath = $this->storeFile($file, $filename)) {
            return $this->getStoredFileErrorPayload();
        }

        $file = Media::create(
            $this->getUploadDetails($file, $filename, $data)
        );

        return $this->getSuccessPayload($file);
    }

    /**
     * Validate the uploaded file.
     *
     * @return bool
     */
    protected function isFileValid(): bool
    {
        $mimes = $this->config['mimes'];
        $extensions = $this->config['extensions'];
        $maxFileSize = $this->config['max_size'];

        $maxValidator = Validator::make($this->request->all(), [
            'files.*' => 'max:' . $maxFileSize,
        ]);

        if ($maxValidator->fails()) {
            $this->validationError = 'File exceeds the maximum size allowed.';
            return false;
        }

        $mimesValidator = Validator::make($this->request->all(), [
            'files.*' => 'mimetypes:' . implode(',', $mimes),
        ]);

        if ($mimesValidator->passes()) {
            return true;
        }

        $extensionsValidator = Validator::make($this->request->all(), [
            'files.*' => 'mimes:' . implode(',', $extensions),
        ]);

        if ($extensionsValidator->passes()) {
            return true;
        }

        $this->validationError = 'File type not allowed.';

        return false;
    }

    /**
     * Get the file that's been uploaded.
     *
     * @return \Illuminate\Http\UploadedFile
     */
    protected function getUploadFile(): UploadedFile
    {
        $files = $this->request->file('files');

        return $files[0];
    }

    /**
     * Get the filename.
     *
     * @param  \Illuminate\Http\UploadedFile  $file
     *
     * @return string
     */
    protected function getFilename(UploadedFile $file): string
    {
        return $this->request->input('name') ?? $file->getFilename();
    }

    /**
     * Make the name unique.
     *
     * @param  string  $filename
     * @param  \Illuminate\Http\UploadedFile  $file
     *
     * @return string
     */
    protected function makeFilenameUnique($filename, UploadedFile $file): string
    {
        $count = Media::where('original_name', '=', $filename)->count();

        $name = Str::slug(pathinfo($filename, PATHINFO_FILENAME));
        $extension = pathinfo($filename, PATHINFO_EXTENSION);

        if (empty($count) && empty($extension)) {
            return $name;
        }

        if (empty($count)) {
            return $name . '.' . $extension;
        }

        $increment = $count + 1;

        if (empty($extension)) {
            return $name . '-' . $increment;
        }

        return $name . '-' . $increment . '.' . $extension;
    }

    /**
     * Store the uploaded file.
     *
     * @param  \Illuminate\Http\UploadedFile  $file
     * @param  string  $filename
     *
     * @return bool
     */
    protected function storeFile(UploadedFile $file, string $filename)
    {
        // Store the original
        $file->storeAs(
            $this->getPathRelativeToDisk('originals'), $filename, $this->getDisk()
        );

        // Don't make cuts if we are not dealing with an image
        if (explode('/', $file->getMimeType())[0] != 'image') {
            return true;
        }

        // Make the cuts
        foreach ($this->config['cuts'] as $id => $data) {
            $this->storeCut($this->resizeCut($file, $data), $filename, $id);
        }

        return true;
    }

    /**
     * Get the path that's relative to the storage folder.
     *
     * @param  string|null  $cut
     *
     * @return string
     */
    protected function getPathRelativeToDisk(string $cut = null) : string
    {
        $path = $this->config['directory'];

        if (is_null($path)) {
            return $this->getPathRelativeToDirectory($cut);
        }

        return $path . '/' . $this->getPathRelativeToDirectory($cut);
    }

    /**
     * Get the path that's relative to the media storage directory.
     *
     * It will comprise of the name of the cut (if one is given) along
     * with the current year and month.
     *
     * i.e 'thumbnail/2019/5'
     *
     * @param  string|null  $cut
     *
     * @return string
     */
    protected function getPathRelativeToDirectory(string $cut = null) : string
    {
        if (is_null($cut)) {
            $cut = 'originals';
        }

        return $cut . '/' . $this->date->year . '/' . $this->date->month;
    }

    /**
     * Store the cut up file.
     *
     * @param  \Illuminate\Http\UploadedFile  $file
     * @param  array  $data
     *
     * @return \Intervention\Image\Image
     */
    protected function resizeCut(UploadedFile $file, array $data) : Image
    {
        $image = (new ImageManager)->make($file);
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        // When exact width and height is given, make the best possible fit
        if (! is_null($width) && ! is_null($height)) {
            return $this->resizeWhenWidthAndHeightIsGiven($image, $width, $height);
        }

        // When width only is defined, scale to it with current aspect ratio
        if (! is_null($width) && is_null($height)) {
            return $this->resizeWhenWidthIsGivenButNotHeight($image, $width);
        }

        // When height only is defined, scale to it with current aspect ratio
        if (is_null($width) && ! is_null($height)) {
            return $this->resizeWhenHeightIsGivenButNotWidth($image, $height);
        }

        // When max width and height is given, scale to whichever has largest aspect ratio
        if (! is_null($maxWidth) && ! is_null($maxHeight)) {
            return $this->resizeWhenMaxWidthAndMaxHeightIsGiven($image, $maxWidth, $maxHeight);
        }

        return $image;
    }

    /**
     * Resize the image when an absolute width and height is given.
     *
     * @param  \Intervention\Image\Image  $image
     * @param  int  $width
     * @param  int  $height
     *
     * @return \Intervention\Image\Image
     */
    protected function resizeWhenWidthAndHeightIsGiven(Image $image, int $width, int $height) : Image
    {
        return $image->fit($width, $height);
    }

    /**
     * Resize the image when an absolute width is given but no height.
     *
     * @param  \Intervention\Image\Image  $image
     * @param  int  $width
     *
     * @return \Intervention\Image\Image
     */
    protected function resizeWhenWidthIsGivenButNotHeight(Image $image, int $width) : Image
    {
        return $image->resize($width, null, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Resize the image when an absolute height is given but no width.
     *
     * @param  \Intervention\Image\Image  $image
     * @param  int  $height
     *
     * @return \Intervention\Image\Image
     */
    protected function resizeWhenHeightIsGivenButNotWidth(Image $image, int $height) : Image
    {
        return $image->resize(null, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Resize the image when we have a max width and max height defined.
     *
     * @param  \Intervention\Image\Image  $image
     * @param  int  $maxWidth
     * @param  int  $maxHeight
     *
     * @return \Intervention\Image\Image
     */
    protected function resizeWhenMaxWidthAndMaxHeightIsGiven(Image $image, int $maxWidth, int $maxHeight) : Image
    {
        $width = null;
        $height = null;

        if ($this->getAspectRatio($image->width(), $image->height()) >= 1) {
            $width = $maxWidth;
        } else {
            $height = $maxHeight;
        }

        return $image->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Get the aspect ratio.
     *
     * @param  int  $width
     * @param  int  $height
     *
     * @return int|float
     */
    protected function getAspectRatio(int $width, int $height) : float
    {
        return $width / $height;
    }

    /**
     * Store the cut up the image.
     *
     * @param  \Intervention\Image\Image  $image
     * @param  string  $filename
     * @param  string  $cutId
     *
     * @return bool
     */
    protected function storeCut(Image $image, string $filename, string $cutId): bool
    {
        $path = $this->getPathRelativeToDisk($cutId);

        if (! Storage::disk($this->getDisk())->exists($path)) {
            Storage::disk($this->getDisk())->makeDirectory($path, 0755, true, true);
        }

        return Storage::disk($this->getDisk())->put($path.'/'.$filename, (string) $image->encode());
    }

    /**
     * Get the storage disk for the upload.
     *
     * @return string
     */
    protected function getDisk(): string
    {
        return $this->config['disks'][$this->visibility];
    }

    /**
     * Get the storage disk path.
     *
     * @return string
     */
    protected function getDiskPath(): string
    {
        return Storage::disk($this->getDisk())
            ->getDriver()
            ->getAdapter()
            ->getPathPrefix();
    }

    /**
     * Get the default data that's needed to create a new record.
     *
     * @param  \Illuminate\Http\UploadedFile  $file
     * @param  string  $filename
     * @param  array  $data
     *
     * @return array
     */
    protected function getUploadDetails(UploadedFile $file, string $filename, array $data = []): array
    {
        $defaults = [
            'original_name' => $this->request->input('name') ?? $file->getFilename(),
            'name' => $filename,
            'title' => $this->request->input('title') ?? $filename,
            'alt_text' => $this->request->input('alt_text'),
            'caption' => $this->request->input('caption'),
            'description' => $this->request->input('description'),
            'copyright' => $this->request->input('copyright'),
            'mimetype' => $file->getMimeType(),
            'upload_path' => $this->date->year . '/' . $this->date->month,
            'visibility' => $this->visibility,
            'seo_title' => $this->request->seo_title,
            'seo_keywords' => $this->request->seo_keywords,
            'seo_description' => $this->request->seo_description,
            'administrator_id' => Auth::user()->{Config::userIdColumn()} ?? null,
        ];

        return array_merge($defaults, $data);
    }

    /**
     * Get the validation payload for the response.
     *
     * @return array
     */
    protected function getValidationErrorPayload(): array
    {
        return [
            'success' => false,
            'error' => $this->validationError,
            'file' => null,
        ];
    }

    /**
     * Get the stored file payload for the response.
     *
     * @return array
     */
    protected function getStoredFileErrorPayload(): array
    {
        return [
            'success' => false,
            'error' => 'file was not stored',
            'file' => null,
        ];
    }

    /**
     * Get the success payload for the response.
     *
     * @param  \Laramedia\Models\Media  $file
     *
     * @return array
     */
    protected function getSuccessPayload(Media $file): array
    {
        return [
            'success' => true,
            'error' => null,
            'file' => new MediaResource($file),
        ];
    }

    /**
     * Get the configuration defaults.
     *
     * @return array
     */
    protected function getConfigurationDefaults(): array
    {
        return [
            'disks' => Config::disks(),
            'private_disk' => Config::privateDisk(),
            'public_disk' => Config::publicDisk(),
            'directory' => Config::directory(),
            'max_size' => Config::maxSize(),
            'extensions' => Config::allowedExtensions(),
            'mimes' => Config::allowedMimes(),
            'cuts' => Config::imageCuts(),
        ];
    }
}
