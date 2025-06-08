<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);

Route::get('/about', [App\Http\Controllers\HomeController::class, 'about'])->name('about');

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
