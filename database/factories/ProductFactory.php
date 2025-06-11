<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(3),
            'short_description' => $this->faker->sentence(),
            'long_description' => $this->faker->paragraph(5),
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'images' => [
                $this->faker->imageUrl(),
                $this->faker->imageUrl(),
                $this->faker->imageUrl(),
            ],
            'specifications' => [
                'material' => $this->faker->word(),
                'weight' => $this->faker->numberBetween(100, 1000) . 'g',
                'dimensions' => $this->faker->numberBetween(1, 10) . 'x' . $this->faker->numberBetween(1, 10) . 'x' . $this->faker->numberBetween(1, 10) . ' cm',
            ],
            'variations' => [
                ['type' => 'Color', 'options' => $this->faker->randomElements(['Red', 'Blue', 'Green', 'Black', 'White'], $this->faker->numberBetween(1, 5))],
                ['type' => 'Size', 'options' => $this->faker->randomElements(['S', 'M', 'L', 'XL'], $this->faker->numberBetween(1, 4))],
            ],
            'stock_status' => $this->faker->randomElement(['in_stock', 'out_of_stock', 'low_stock']),
            'sku' => $this->faker->unique()->ean8(),
            'disabled_at' => null,
        ];
    }
}
