<?php

namespace LaravelFilesLibrary\Resources;

use Illuminate\Support\Carbon;
use LaravelFilesLibrary\Support\Config;
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
        // Get the attributes to build upon
        $attributes = parent::toArray($request);

        // Additional data
        $attributes['is_image'] = $this->resource->isImage();
        $attributes['is_not_image'] = $this->resource->isNotImage();
        $attributes['local_path'] = $this->resource->getFullPath();
        $attributes['public_url'] = $this->resource->getPublicUrl();
        $attributes['base64_url'] = $this->resource->getBase64Url();
        $attributes['human_created_at'] = Carbon::parse($this->created_at)->toFormattedDateString();
        $attributes['human_filesize'] = $this->resource->humanFilesize();
        $attributes['human_dimensions'] = $this->resource->humanDimensions();

        // Permissions
        $attributes['user_can_preview'] = Config::can('preview', $this->resource);
        $attributes['user_can_view'] = Config::can('preview', $this->resource);
        $attributes['user_can_download'] = Config::can('download', $this->resource);
        $attributes['user_can_update'] = Config::can('update', $this->resource);
        $attributes['user_can_trash'] = Config::can('trash', $this->resource);
        $attributes['user_can_restore'] = Config::can('restore', $this->resource);
        $attributes['user_can_destroy'] = Config::can('delete', $this->resource);

        // Routes
        $attributes['preview_route'] = Config::previewRoute($this->resource);
        $attributes['download_route'] = Config::downloadRoute($this->resource);
        $attributes['update_route'] = Config::updateRoute($this->resource);
        $attributes['trash_route'] = Config::trashRoute($this->resource);
        $attributes['base64url_route'] = Config::base64UrlRoute($this->resource);
        $attributes['restore_route'] = Config::trashIsEnabled() ? Config::restoreRoute($this->resource) : null;
        $attributes['destroy_route'] = Config::trashIsEnabled() ? Config::destroyRoute($this->resource) : null;

        if ($this->resource->getType() != 'image') {
            return $attributes;
        }

        foreach (Config::imageCutDirectories() as $cut => $data) {
            $attributes[$cut.'_public_url'] = $this->resource->getPublicUrl($cut);
        }

        return $attributes;
    }
}
