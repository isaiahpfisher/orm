<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return Inertia::render('posts/index', [
            'posts' => Post::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        return Inertia::render('posts/create', [
            'categories' => Category::all(),
            'authors' => Author::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {

        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required|max:8000',
            'category' => 'required|exists:categories,id',
            'author' => 'required|exists:authors,id',
        ]);

        Post::create([
            'title'   => $validated['title'],
            'content' => $validated['content'],
            'category_id' => $validated['category'],
            'author_id' => $validated['author'],
        ]);

        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post) {
        return Inertia::render('posts/show', [
            'post' => $post,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post) {
        return Inertia::render('posts/edit', [
            'post' => $post,
            'authors' => Author::all(),
            'categories' => Category::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post) {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required|max:8000',
            'category' => 'required|exists:categories,id',
            'author' => 'required|exists:authors,id',
        ]);

        $post->update([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'category_id' => $validated['category'],
            'author_id' => $validated['author'],
        ]);

        return redirect()->route('posts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post) {
        $post->delete();
    }
}
