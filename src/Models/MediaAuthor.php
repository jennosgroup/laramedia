<?php

namespace Laramedia\Models;

use Laramedia\Support\Config;
use Illuminate\Database\Eloquent\Model;

class MediaAuthor extends Model
{
    /**
     * The mass assignable attributes.
     *
     * @var array
     */
    protected $fillable = [
        'media_id', 'author_id',
    ];

    /**
     * Get the table name for the model.
     *
     * @return string
     */
    public function getTable()
    {
        return Config::tableName('author');
    }
}
