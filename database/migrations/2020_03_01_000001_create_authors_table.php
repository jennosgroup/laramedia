<?php

use Laramedia\Support\Config;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthorsTable extends Migration
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
        $this->name = Config::tableName('author');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $userModel = config('auth.providers.users.model');
        $userTable = (new $userModel)->getTable();
        $mediaTable = Config::tableName('media');
        $userIdColumn = Config::userIdColumn();
        $userIdColumnType = Config::userIdColumnType();

        Schema::create($this->name, function (Blueprint $table) use ($userTable, $mediaTable, $userIdColumn, $userIdColumnType) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('media_id');
            $table->{$userIdColumnType}('author_id');
            $table->timestamps();

            $table->foreign('media_id')
                ->references('id')
                ->on($mediaTable)
                ->onDelete('cascade');

            $table->foreign('author_id')
                ->references($userIdColumn)
                ->on($userTable)
                ->onDelete('cascade');
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
