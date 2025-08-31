<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            $table->string('name', 32);
            $table->text('description')->nullable();
            $table->string('address', 150)->nullable();
            $table->string('phone_number', 24)->nullable();
            $table->text('logo')->nullable();
            $table->text('profile_image')->nullable();
            $table->text('banner_image')->nullable();
            $table->string('profile_id', 50);
            $table->timestamps();

            $table->foreign('profile_id')->references('username')->on('profiles')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sellers');
    }
};
