<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);

Route::get('/about', AboutController::class)->name('about');

Route::get('/products', [ProductController::class, 'index'])->name('products.index');

Route::post('/ssr/health-check', fn () => response()->ok());
