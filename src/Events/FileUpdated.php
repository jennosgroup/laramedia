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

class FileUpdated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var Laramedia\Models\Media
     */
    public $media;

    /**
     * @var array
     */
    public $changes;

    /**
     * Create a new event instance.
     *
     * @param  Laramedia\Models\Media  $media
     * @param  array  $changes
     *
     * @return void
     */
    public function __construct(Media $media, array $changes)
    {
        $this->media = $media;
        $this->changes = $changes;
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
