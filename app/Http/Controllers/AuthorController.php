<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthorController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return Inertia::render("authors/index", [
            'authors' => Author::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        return Inertia::render("authors/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email',
            'bio' => 'required|max:1000'
        ]);

        Author::create($validatedData);

        return redirect()->route('authors.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Author $author) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Author $author) {
        return Inertia::render(
            'authors/edit',
            [
                'author' => $author->load('posts')
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Author $author) {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email',
            'bio' => 'required|max:1000'
        ]);

        $author->update($validated);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Author $author) {
        $author->delete();
    }
}
