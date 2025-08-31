<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
            Schema::create('user_profile', function (Blueprint $table) {
            $table->string('email', 100);
            $table->string('username', 50);

            $table->primary(['email', 'username']);
            $table->foreign('email')->references('email')->on('users')->cascadeOnDelete();
            $table->foreign('username')->references('username')->on('profiles')->cascadeOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_profile');
    }
};
