<?php

namespace Tests\Feature;

use Tests\TestCase;

class AboutPageTest extends TestCase
{
    /**
     * Test that the about page returns a successful response and correct content.
     *
     * @return void
     */
    public function test_about_page_returns_successful_response()
    {
        $response = $this->get('/about');

        $response->assertStatus(200);
        $response->assertSee("This is the About page.");
    }
}
