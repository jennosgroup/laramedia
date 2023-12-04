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
        $attributes['public_url'] = $this->resource->getPublicUrl();
        $attributes['base64_url'] = null;
        $attributes['human_created_at'] = Carbon::parse($this->created_at)->toFormattedDateString();
        $attributes['human_filesize'] = $this->resource->humanFilesize();
        $attributes['human_dimensions'] = $this->resource->humanDimensions();

        if ($this->resource->getType() != 'image') {
            return $attributes;
        }

        $diskPath = $this->resource->getDiskPath();

        foreach (Config::imageCutDirectories() as $cut => $data) {
            $attributes[$cut.'_public_url'] = $this->resource->getPublicUrl($cut);
        }

        return $attributes;
    }
}
