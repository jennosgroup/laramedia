<?php

namespace Laramedia\Resources;

use Laramedia\Support\Config;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return array
     */
    public function toArray($request)
    {
        // Get the model attributes
        $attributes = parent::toArray($request);

        // File type
        $type = $this->resource->getCategory();

        // Additional data
        $attributes['type'] = $type;
        $attributes['extension'] = $this->resource->getExtension();
        $attributes['readable_created_at'] = Carbon::parse($this->created_at)->toFormattedDateString();
        $attributes['readable_size'] = $this->resource->getReadableFileSize();

        // Permissions
        $attributes['can_trash'] = Config::can('trash', $this->resource);
        $attributes['can_delete'] = Config::can('delete', $this->resource);
        $attributes['can_restore'] = Config::can('restore', $this->resource);
        $attributes['can_update'] = Config::can('update', $this->resource);

        // Add routes
        $attributes['preview_route'] = route('laramedia.show', $this->id);
        $attributes['download_route'] = route('laramedia.download', $this->id);
        $attributes['update_route'] = route('laramedia.update', $this->id);
        $attributes['trash_route'] = route('laramedia.trash', $this->id);

        if (Config::trashIsEnabled()) {
            $attributes['restore_route'] = route('laramedia.restore', $this->id);
            $attributes['destroy_route'] = route('laramedia.destroy', $this->id);
        }

        // Icons
        if ($type == 'audio') {
            $attributes['icon_url'] = asset('vendor/laramedia/images/icon-audio.png');
        } elseif ($type == 'video') {
            $attributes['icon_url'] = asset('vendor/laramedia/images/icon-video.png');
        } elseif ($type != 'image') {
            $attributes['icon_url'] = asset('vendor/laramedia/images/icon-file.png');
        }

        if ($this->visibility == 'public') {
            $attributes['public_path'] = $this->getPublicUrl();
            $attributes['thumbnail_public_path'] = $this->getPublicUrl('thumbnail');
            $attributes['small_public_path'] = $this->getPublicUrl('small');
            $attributes['medium_public_path'] = $this->getPublicUrl('medium');
            $attributes['large_public_path'] = $this->getPublicUrl('large');
        }

        if ($type != 'image') {
            return $attributes;
        }

        $attributes['readable_dimensions'] = $this->resource->getReadableDimensions();

        // Thumbnail path for image preview
        $attributes['thumbnail_path'] = ($this->visibility == 'public')
            ? $this->resource->getPublicUrl('thumbnail')
            : $this->resource->getBase64Url('thumbnail');

        // Large path for image preview
        $attributes['large_path'] = ($this->visibility == 'public')
            ? $this->resource->getPublicUrl('large')
            : $this->resource->getBase64Url('large');

        return $attributes;
    }
}
