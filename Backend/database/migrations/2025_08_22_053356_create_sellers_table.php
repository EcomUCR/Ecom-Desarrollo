<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('sellers', function (Blueprint $table) {
            $table->id(); // serial (PK autoincremental)
            $table->string('name', 32);
            $table->text('description')->nullable();
            $table->string('address', 150);
            $table->text('image')->nullable();
            $table->string('profile_id', 50); // si luego quieres relacionar con 'perfiles'
            $table->timestamps();
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
