<?php

namespace Laramedia\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Laramedia\Resources\MediaResource;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class FileCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var Laramedia\Resources\MediaResource
     */
    public $media;

    /**
     * Create a new event instance.
     *
     * @param  Laramedia\Resources\MediaResource  $media
     *
     * @return void
     */
    public function __construct(MediaResource $media)
    {
        $this->media = $media;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
