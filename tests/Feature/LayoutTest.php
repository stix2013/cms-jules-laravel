<?php

namespace Tests\Feature;

use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class LayoutTest extends TestCase
{
    #[Test]
    public function home_page_returns_success_and_correct_inertia_component()
    {
        $this->get('/')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Home'));
    }

    #[Test]
    public function about_page_returns_success_and_correct_inertia_component()
    {
        $this->get('/about')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('About'));
    }

    #[Test]
    public function products_page_returns_success_and_correct_inertia_component()
    {
        $this->get('/products')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Products'));
    }

    #[Test]
    public function renders_footer_content_on_home_page()
    {
        $this->get('/')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->has('ziggy')
                ->where('ziggy', fn ($value) => is_array($value))
            );
    }

    #[Test]
    public function renders_header_title_on_home_page()
    {
        $this->get('/')
            ->assertStatus(200)
            ->assertSee('My Inertia App');
    }
}
