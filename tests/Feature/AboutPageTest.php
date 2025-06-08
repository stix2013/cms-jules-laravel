<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class AboutPageTest extends TestCase
{
    /**
     * Test that the about page returns a successful Inertia response and correct component.
     *
     * @return void
     */
    public function test_about_page_returns_successful_response()
    {
        $response = $this->get('/about');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('About')
            ->where('title', 'About Us') // Asserting 'title' prop has the value 'About Us'
        );
    }
}
