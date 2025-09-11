<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return Inertia::render('categories/index', [
            'categories' => Category::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        return Inertia::render('categories/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:1000'
        ]);

        Category::create($validated);

        return redirect()->route('categories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category) {
        return Inertia::render('categories/edit', [
            'category' => $category->load('posts'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category) {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:1000'
        ]);

        $category->update($validated);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category) {
        $category->delete();
    }
}
