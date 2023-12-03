<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use LaravelFilesLibrary\Support\Config;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(Config::tableName('media'), function (Blueprint $table) {
            $table->id('id');
            $table->uuid('uuid')->unique();
            $table->text('name');
            $table->text('original_name');
            $table->string('title');
            $table->text('alt_text')->nullable();
            $table->text('caption')->nullable();
            $table->text('description')->nullable();
            $table->string('mimetype');
            $table->string('file_type');
            $table->string('file_extension');
            $table->integer('file_size')->default(0);
            $table->integer('file_width')->nullable();
            $table->integer('file_height')->nullable();
            $table->text('upload_path');
            $table->string('disk');
            $table->string('visibility');
            $table->longText('options')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists(Config::tableName('media'));
    }
};
