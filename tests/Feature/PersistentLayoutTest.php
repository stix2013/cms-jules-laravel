<?php

namespace Tests\Feature;

use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class PersistentLayoutTest extends TestCase
{
    /** @test */
    public function home_page_returns_success_and_correct_inertia_component()
    {
        $this->get('/')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Home'));
    }

    /** @test */
    public function about_page_returns_success_and_correct_inertia_component()
    {
        $this->get('/about')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('About'));
    }

    /** @test */
    public function products_page_returns_success_and_correct_inertia_component()
    {
        $this->get('/products')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Products'));
    }
}
