<?php

namespace Tests\Feature;

use App\Models\Product; // Assuming Product model is used by factory
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ProductsPageTest extends TestCase
{
    /**
     * Test that the products page loads correctly and returns an Inertia response.
     */
    public function test_products_page_loads_and_returns_inertia_response(): void
    {
        // Optional: Mock Product::factory()->make() if it causes issues in test environment
        // without a database or if you want to control the exact data.
        // For now, we assume the factory's make() method is safe in tests.

        $response = $this->get('/products');

        $response->assertStatus(200);

        $response->assertInertia(fn (Assert $page) => $page
            ->component('Products', true) // Check component name, ignore partials for now
            ->has('products') // Check if the 'products' prop exists
            ->where('products', function ($value) {
                // Check if 'products' is an array and has the expected count if using 'make'
                // Note: ->make() produces a Collection of non-persisted models.
                return is_array($value) || $value instanceof \Illuminate\Support\Collection;
            })
            ->has('products.0.name') // Example: check if the first product has a name
        );
    }
}
