<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->string('username', 50)->primary();
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->text('avatar')->nullable();
            $table->timestamps();
        });

    }

    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
