<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        return Inertia::render('Home');
    }

    /**
     * Display the about page.
     */
    public function about()
    {
        return Inertia::render('About');
    }
}
