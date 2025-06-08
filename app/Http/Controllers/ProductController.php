<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::factory()->count(10)->make(); // Using make() as we don't have a DB connection set up for this subtask to use create()

        return Inertia::render('Products', [
            'products' => $products,
        ]);
    }
}
