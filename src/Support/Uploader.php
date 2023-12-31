<?php

namespace JennosGroup\Laramedia\Support;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use JennosGroup\Laramedia\Actions\CheckIfFileIsNotTooBig;
use JennosGroup\Laramedia\Actions\CheckIfFileIsNotTooSmall;
use JennosGroup\Laramedia\Actions\CheckIfFileTypeValid;
use JennosGroup\Laramedia\Models\Media;
use Ramsey\Uuid\Uuid;

class Uploader
{
    /**
     * The request instance.
     */
    protected Request $request;

    /**
     * The date instance of when the upload started.
     */
    protected Carbon $date;

    /**
     * The codes.
     */
    protected array $codes = [
        10 => 'File type is not allowed.',
        20 => 'File does not meet the minimum size allowed.',
        30 => 'File exceeds the maximum size allowed.',
        40 => 'File was not stored.',
        50 => 'File uploaded successfully.',
    ];

    /**
     * Store the last error code.
     */
    protected ?int $lastErrorCode = null;

    /**
     * The holder for the validation errors.
     */
    protected array $errors = [];

    /**
     * Create an instance of the uploader.
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->date = now();
    }

    /**
     * Handle the file upload.
     */
    public function handle(): array
    {
        if (! $this->fileIsValid($this->getFileFromRequest())) {
            return $this->getValidationErrorPayload();
        }

        $filename = $this->makeFilenameUnique(
            $this->getFileFromRequest()->getClientOriginalName(),
            $this->getFileFromRequest()
        );

        if (! $this->storeFile($this->getFileFromRequest(), $filename)) {
            return $this->getFileNotStoredPayload();
        }

        $media = Media::create(
            $this->getUploadDetails($this->getFileFromRequest(), $filename)
        );

        return $this->getSuccessPayload($media);
    }

    /**
     * Get the request instance.
     */
    public function getRequest(): Request
    {
        return $this->request;
    }

    /**
     * Get the time instance.
     */
    public function getTimeInstance(): Carbon
    {
        return $this->date;
    }

    /**
     * Get the file from the request.
     */
    public function getFileFromRequest(): UploadedFile
    {
        return $this->getRequest()->file;
    }

    /**
     * Get the disk.
     */
    public function getDisk(): string
    {
        return $this->getRequest()->input('disk', Config::defaultDisk());
    }

    /**
     * Get the visibility
     */
    public function getVisibility(): string
    {
        $defaults = Config::disksDefaultVisibility();
        $defaultVisibility = $defaults[$this->getDisk()] ?? 'private';

        return $this->getRequest()->input('visibility', $defaultVisibility);
    }

    /**
     * Check if the file is valid.
     */
    public function fileIsValid(): bool
    {
        if (! CheckIfFileIsNotTooSmall::execute($this->getFileFromRequest())) {
            $this->setMinFileSizeError();
        } elseif (! CheckIfFileIsNotTooBig::execute($this->getFileFromRequest())) {
            $this->setMaxFileSizeError();
        } elseif (! CheckIfFileTypeValid::execute($this->getFileFromRequest())) {
            $this->setFileNotAllowedError();
        }

        return empty($this->getErrors());
    }

    /**
     * Make the filename unique.
     */
    public function makeFilenameUnique(string $filename, UploadedFile $file): string
    {
        $uuid = Uuid::uuid4()->toString();

        $name = Str::slug(pathinfo($filename, PATHINFO_FILENAME));
        $extension = pathinfo($filename, PATHINFO_EXTENSION);
        $fullname = $name.'.'.$extension;

        if (strlen($fullname) > (255 - 38)) {
            $name = substr($name, 0, 255 - 38 - strlen($extension));
        }

        if (empty($extension)) {
            return $name.'-'.$uuid;
        }

        return $name.'-'.$uuid.'.'.$extension;
    }

    /**
     * Store the file.
     */
    public function storeFile(UploadedFile $file, string $filename): bool
    {
        if (explode('/', $file->getMimeType())[0] != 'image') {
            return $this->storeUploadedFile($file, $filename);
        }

        return $this->storeUploadedImage($file, $filename);
    }

    /**
     * Store the uploaded file.
     */
    public function storeUploadedFile(UploadedFile $file, string $filename): bool
    {
        $path = $this->getPathRelativeToDisk();

        if (! Storage::disk($this->getDisk())->exists($path)) {
            Storage::disk($this->getDisk())->makeDirectory($path, 0775, true, true);
        }

        return Storage::disk($this->getDisk())->putFileAs(
            $path,
            $file,
            $filename,
            $this->getVisibility()
        );
    }

    /**
     * Store the uploaded image.
     */
    public function storeUploadedImage(UploadedFile $file, string $filename): bool
    {
        $cuts = Config::imageCutDirectories();

        foreach ($cuts as $cut => $data) {
            $image = (new ResizeFile())->execute($file, $data);
            $path = $this->getPathRelativeToDisk($cut);

            if (! Storage::disk($this->getDisk())->exists($path)) {
                Storage::disk($this->getDisk())->makeDirectory($path, 0775, true, true);
            }

            Storage::disk($this->getDisk())
                ->put($path.'/'.$filename, (string) $image->encode(), $this->getVisibility());
        }

        return true;
    }

    /**
     * Get the path relative to the disk.
     */
    public function getPathRelativeToDisk(string $cut = null): string
    {
        $directory = Config::directory();

        if (! empty($directory)) {
            $directory .= '/';
        }

        if (empty($cut)) {
            $directory .= Config::originalFilesDirectory();
        } else {
            $directory .= $cut;
        }

        return $directory.'/'.$this->getRelativeUploadPath();
    }

    /**
     * Get the relative upload path.
     */
    public function getRelativeUploadPath(): string
    {
        return $this->getTimeInstance()->year.'/'.$this->getTimeInstance()->month;
    }

    /**
     * Get the upload details.
     */
    public function getUploadDetails(UploadedFile $file, string $filename): array
    {
        $width = null;
        $height = null;

        $mimeTypeDetails = explode('/', $file->getMimeType());
        $type = $mimeTypeDetails[0];
        $extension = $mimeTypeDetails[1];

        if ($type == 'image') {
            $fileSizes = getimagesize($file->getPathname());
            $width = $fileSizes[0];
            $height = $fileSizes[1];
        }

        $originalName = $file->getClientOriginalName();
        $title = str_replace('.'.pathinfo($originalName, PATHINFO_EXTENSION), '', $originalName);
        $title = ucwords(str_replace(['_', '-'], ' ', $title));

        return [
            'name' => $filename,
            'original_name' => $originalName,
            'title' => $title,
            'alt_text' => null,
            'caption' => null,
            'description' => null,
            'mimetype' => $file->getMimeType(),
            'file_type' => $type,
            'file_extension' => $extension,
            'file_size' => $file->getSize(),
            'file_width' => $width,
            'file_height' => $height,
            'upload_path' => $this->getRelativeUploadPath(),
            'disk' => $this->getDisk(),
            'visibility' => $this->getVisibility(),
            'options' => [],
        ];
    }

    /**
     * Get the payload for when the file was not stored.
     */
    public function getValidationErrorPayload(): array
    {
        return [
            'file' => null,
            'success' => false,
            'error' => true,
            'codes' => $this->getErrorCodes(),
            'last_code' => $this->getLastErrorCode(),
            'messages' => $this->getErrorMessages(),
            'last_message' => $this->getLastErrorMessage(),
        ];
    }

    /**
     * Get the payload for when the file was not stored.
     */
    public function getFileNotStoredPayload(): array
    {
        return [
            'file' => null,
            'success' => false,
            'error' => true,
            'codes' => [40],
            'last_code' => 40,
            'messages' => [$this->getCodeValue(40)],
            'last_message' => $this->getCodeValue(40),
        ];
    }

    /**
     * Get the upload success payload.
     */
    public function getSuccessPayload(Media $file)
    {
        return [
            'file' => $file,
            'success' => true,
            'error' => false,
            'codes' => [50],
            'last_code' => 50,
            'messages' => [$this->getCodeValue(50)],
            'last_message' => $this->getCodeValue(50),
        ];
    }

    /**
     * Get the codes.
     */
    public function getCodes(): array
    {
        return $this->codes;
    }

    /**
     * Get the code value.
     */
    public function getCodeValue(int $code): ?string
    {
        return $this->getCodes()[$code] ?? null;
    }

    /**
     * Get the errors.
     */
    public function getErrors(): array
    {
        return $this->errors;
    }

    /**
     * Get the last error code.
     */
    public function getLastErrorCode(): ?int
    {
        return $this->lastErrorCode;
    }

    /**
     * Get the last error message.
     */
    public function getLastErrorMessage(): ?string
    {
        return $this->codes[$this->getLastErrorCode()] ?? null;
    }

    /**
     * Get the error codes.
     */
    public function getErrorCodes(): array
    {
        return array_keys($this->getErrors());
    }

    /**
     * Get the error messages.
     */
    public function getErrorMessages(): array
    {
        return array_values($this->getErrors());
    }

    /**
     * Set the min file size error.
     */
    public function setMinFileSizeError(): void
    {
        $this->errors[20] = $this->getCodeValue(20);
        $this->lastErrorCode = 20;
    }

    /**
     * Set the max file size error.
     */
    public function setMaxFileSizeError(): void
    {
        $this->errors[30] = $this->getCodeValue(30);
        $this->lastErrorCode = 30;
    }

    /**
     * Set the file not allowed error.
     */
    public function setFileNotAllowedError(): void
    {
        $this->errors[10] = $this->getCodeValue(10);
        $this->lastErrorCode = 10;
    }
}
