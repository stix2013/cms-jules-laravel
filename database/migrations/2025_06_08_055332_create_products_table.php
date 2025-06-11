<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('short_description');
            $table->longText('long_description');
            $table->decimal('price', 8, 2);
            $table->json('images')->nullable();
            $table->json('specifications')->nullable();
            $table->json('variations')->nullable();
            $table->string('stock_status')->default('in_stock');
            $table->string('sku')->nullable()->unique();
            $table->timestamp('disabled_at')->nullable();
            $table->timestamps();
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
