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
            'short_description' => $this->faker->paragraph(2),
            'long_description' => $this->faker->paragraph(5),
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'disabled_at' => null,
        ];
    }
}
