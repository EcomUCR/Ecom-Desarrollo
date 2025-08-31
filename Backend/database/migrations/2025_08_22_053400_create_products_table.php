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
       Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('sku', 30)->unique();
            $table->timestamp('created_at_custom')->useCurrent();
            $table->timestamp('updated_at_custom')->useCurrent()->useCurrentOnUpdate();
            $table->string('name', 50);
            $table->text('description')->nullable();
            $table->integer('discount')->default(0);
            $table->integer('stock')->default(0);
            $table->decimal('price', 10, 2);
            $table->boolean('status')->default(true);
            $table->unsignedBigInteger('vendor_id');
            $table->timestamps();

            $table->foreign('vendor_id')->references('id')->on('vendors')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
