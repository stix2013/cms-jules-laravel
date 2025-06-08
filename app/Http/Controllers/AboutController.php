<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display the about page.
     *
     * @return \Inertia\Response
     */
    public function __invoke()
    {
        return Inertia::render('About', ['title' => 'About Us']);
    }
}
