<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id(); // 👈 llave primaria
            $table->unsignedBigInteger('user_id'); // 👈 relación con users
            $table->string('username', 50)->unique();
            $table->string('name', 50);
            $table->string('last_name', 50);
            $table->string('type', 1)->nullable();
            $table->text('image')->nullable();
            $table->boolean('status')->nullable();
            $table->timestamps();
            // 🔗 Foreign Key
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

    }

    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
