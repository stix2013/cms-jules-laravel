<?php

namespace Tests\Unit;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function test_can_create_product(): void
    {
        $productData = Product::factory()->make()->toArray();

        $product = Product::create($productData);

        $this->assertDatabaseHas('products', $productData);
        $this->assertInstanceOf(Product::class, $product);
    }

    /** @test */
    public function test_can_read_product(): void
    {
        $product = Product::factory()->create();

        $foundProduct = Product::find($product->id);

        $this->assertInstanceOf(Product::class, $foundProduct);
        $this->assertEquals($product->name, $foundProduct->name);
    }

    /** @test */
    public function test_can_update_product(): void
    {
        $product = Product::factory()->create();
        $updatedData = [
            'name' => 'Updated Product Name',
            'price' => 99.99,
        ];

        $product->update($updatedData);

        $this->assertDatabaseHas('products', array_merge(['id' => $product->id], $updatedData));
    }

    /** @test */
    public function test_can_delete_product(): void
    {
        $product = Product::factory()->create();

        $product->delete();

        $this->assertDatabaseMissing('products', ['id' => $product->id]);
    }

    /** @test */
    public function test_can_disable_product(): void
    {
        $product = Product::factory()->create();

        $product->update(['disabled_at' => now()]);

        $this->assertNotNull($product->disabled_at);
        $this->assertDatabaseHas('products', ['id' => $product->id, 'disabled_at' => $product->disabled_at]);
    }
}
