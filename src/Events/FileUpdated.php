<?php

namespace LaravelFilesLibrary\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use LaravelFilesLibrary\Models\Media;

class FileUpdated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * The media instance.
     */
    public Media $media;

    /**
     * The changes made.
     */
    public array $changes = [];

    /**
     * Create a new event instance.
     */
    public function __construct(Media $media, array $changes)
    {
        $this->media = $media;
        $this->changes = $changes;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('channel-name'),
        ];
    }
}
