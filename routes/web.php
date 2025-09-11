<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home', [
        'posts' => Post::all(),
    ]);
})->name('home');

Route::get('read/{post}', [PostController::class, 'show'])
    ->name('posts.show');


Route::middleware('auth')->group(function () {
    Route::get('posts', [PostController::class, 'index'])
        ->name('posts.index');

    Route::get('posts/create', [PostController::class, 'create'])
        ->name('posts.create');

    Route::post('posts', [PostController::class, 'store'])
        ->name('posts.store');

    Route::get('posts/{post}', [PostController::class, 'edit'])
        ->name('posts.edit');

    Route::patch('posts/{post}', [PostController::class, 'update'])
        ->name('posts.update');

    Route::delete('posts/{post}', [PostController::class, 'destroy'])
        ->name('posts.destroy');

    // CATEGORIES
    Route::get('categories', [CategoryController::class, 'index'])->name('categories.index');

    Route::get('categories/create', [CategoryController::class, 'create'])
        ->name('categories.create');

    Route::post('categories', [CategoryController::class, 'store'])
        ->name('categories.store');

    Route::get('categories/{category}', [CategoryController::class, 'edit'])
        ->name('categories.edit');

    Route::patch('categories/{category}', [CategoryController::class, 'update'])
        ->name('categories.update');

    Route::delete('categories/{category}', [CategoryController::class, 'destroy'])
        ->name('categories.destroy');



    // AUTHORS
    Route::get('authors', [AuthorController::class, 'index'])
        ->name('authors.index');

    Route::get('authors/create', [AuthorController::class, 'create'])
        ->name('authors.create');

    Route::post('authors', [AuthorController::class, 'store'])
        ->name('authors.store');

    Route::get('authors/{author}', [AuthorController::class, 'edit'])
        ->name('authors.edit');

    Route::patch('authors/{author}', [AuthorController::class, 'update'])
        ->name('authors.update');

    Route::delete('authors/{author}', [AuthorController::class, 'destroy'])
        ->name('authors.destroy');
});



require __DIR__ . '/auth.php';
