<?php

namespace JennosGroup\Laramedia\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;
use JennosGroup\Laramedia\Support\Laramedia;

class MediaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        // Get the attributes to build upon
        $attributes = parent::toArray($request);

        // Additional data
        $attributes['is_image'] = $this->resource->isImage();
        $attributes['is_not_image'] = $this->resource->isNotImage();
        $attributes['local_path'] = $this->resource->getFullPath();
        $attributes['public_url'] = $publicUrl = $this->resource->getPublicUrl();
        $attributes['display_url'] = $publicUrl ?? $this->resource->getBase64Url() ?? null;
        $attributes['human_created_at'] = Carbon::parse($this->created_at)->toFormattedDateString();
        $attributes['human_filesize'] = $this->resource->humanFilesize();
        $attributes['human_dimensions'] = $this->resource->humanDimensions();

        // Permissions
        $attributes['user_can_preview'] = Laramedia::can('view', $this->resource);
        $attributes['user_can_view'] = Laramedia::can('view', $this->resource);
        $attributes['user_can_download'] = Laramedia::can('download', $this->resource);
        $attributes['user_can_update'] = Laramedia::can('update', $this->resource);
        $attributes['user_can_trash'] = Laramedia::can('trash', $this->resource);
        $attributes['user_can_restore'] = Laramedia::can('restore', $this->resource);
        $attributes['user_can_destroy'] = Laramedia::can('destroy', $this->resource);

        // Routes
        $attributes['view_route'] = Laramedia::viewRoute($this->resource);
        $attributes['preview_route'] = Laramedia::viewRoute($this->resource);
        $attributes['download_route'] = Laramedia::downloadRoute($this->resource);
        $attributes['update_route'] = Laramedia::updateRoute($this->resource);
        $attributes['trash_route'] = Laramedia::trashRoute($this->resource);
        $attributes['base64url_route'] = Laramedia::base64UrlRoute($this->resource);
        $attributes['restore_route'] = Laramedia::restoreRoute($this->resource);
        $attributes['destroy_route'] = Laramedia::destroyRoute($this->resource);

        return $attributes;
    }
}
