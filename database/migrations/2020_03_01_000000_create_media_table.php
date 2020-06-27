<?php

use Laramedia\Support\Config;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMediaTable extends Migration
{
    /**
     * The table name to use in the migration.
     */
    private string $name;

    /**
     * Create an instance of the migration.
     *
     * @return void
     */
    public function __construct()
    {
        $this->name = Config::tableName('media');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->name, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('original_name');
            $table->text('name');
            $table->string('title');
            $table->text('alt_text')->nullable();
            $table->text('caption')->nullable();
            $table->text('description')->nullable();
            $table->text('copyright')->nullable();
            $table->string('mimetype');
            $table->text('upload_path');
            $table->string('visibility', 50)->default('private');
            $table->string('seo_title')->nullable();
            $table->string('seo_keywords')->nullable();
            $table->string('seo_description')->nullable();
            $table->unsignedBigInteger('administrator_id')->nullable();
            $table->text('authors')->nullable();
            $table->string('group')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists($this->name);
    }
}
