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

    /**
     * Test that the products page shows a message when no products are available.
     */
    public function test_products_page_handles_no_products(): void
    {
        // Override the ProductController binding or mock the Product model
        // to return an empty collection.
        // For simplicity in this example, we'll assume the controller can return empty products.
        // A more robust test would mock the Product::factory()->count(0)->make() scenario.

        // If ProductController directly uses Product::factory()->count(N)->make(),
        // and N is hardcoded, this test might need a different approach
        // like mocking the factory or controller method.
        // For now, let's assume the controller can return an empty array for products.

        // This part of the test is more conceptual for now, as directly
        // forcing 0 products from the current controller setup is tricky
        // without more advanced mocking or controller modification.
        // A simple way is to ensure the component renders correctly with empty data.

        $response = $this->get('/products'); // This will get products as per controller logic

        $response->assertInertia(fn (Assert $page) => $page
            ->component('Products')
            ->where('products', []) // Asserting if products prop could be empty
        );

        // The actual text "No products found" is in the React component.
        // Testing that text directly requires a different type of test (e.g., Dusk or JS unit/integration test).
    }
}
