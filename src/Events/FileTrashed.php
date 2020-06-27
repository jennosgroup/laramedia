<?php

namespace Laramedia\Events;

use Laramedia\Models\Media;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class FileTrashed
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var Laramedia\Models\Media
     */
    public $media;

    /**
     * Create a new event instance.
     *
     * @param  Laramedia\Models\Media  $media
     *
     * @return void
     */
    public function __construct(Media $media)
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
