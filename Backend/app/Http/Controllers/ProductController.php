<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Models\ProductImage;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of products.
     */
    public function index()
    {
        $products = Product::with(['vendor', 'categories', 'images'])->paginate(10);
        return response()->json($products);
    }

    /**
     * Store a newly created product.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'sku'        => 'required|string|max:30|unique:products',
            'name'       => 'required|string|max:50',
            'description'=> 'nullable|string',
            'discount'   => 'nullable|integer|min:0',
            'stock'      => 'nullable|integer|min:0',
            'price'      => 'required|numeric|min:0',
            'status'     => 'boolean',
            'vendor_id'  => 'required|exists:vendors,id',
            'categories' => 'array',
            'categories.*' => 'exists:categories,id',
            'images'     => 'array',
            'images.*'   => 'url',
        ]);

        // Create product
        $product = Product::create($validated);

        // Attach categories (many-to-many)
        if (!empty($validated['categories'])) {
            $product->categories()->attach($validated['categories']);
        }

        // Save product images
        if (!empty($validated['images'])) {
            foreach ($validated['images'] as $index => $url) {
                ProductImage::create([
                    'product_id' => $product->id,
                    'url'        => $url,
                    'order'      => $index + 1
                ]);
            }
        }

        return response()->json($product->load(['categories', 'images']), 201);
    }

    /**
     * Display the specified product.
     */
    public function show(Product $product)
    {
        return response()->json($product->load(['vendor', 'categories', 'images']));
    }

    /**
     * Update the specified product.
     */
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'sku'        => 'string|max:30|unique:products,sku,' . $product->id,
            'name'       => 'string|max:50',
            'description'=> 'nullable|string',
            'discount'   => 'nullable|integer|min:0',
            'stock'      => 'nullable|integer|min:0',
            'price'      => 'numeric|min:0',
            'status'     => 'boolean',
            'vendor_id'  => 'exists:vendors,id',
            'categories' => 'array',
            'categories.*' => 'exists:categories,id',
            'images'     => 'array',
            'images.*'   => 'url',
        ]);

        $product->update($validated);

        // Sync categories if provided
        if (isset($validated['categories'])) {
            $product->categories()->sync($validated['categories']);
        }

        // Replace product images if provided
        if (isset($validated['images'])) {
            $product->images()->delete();
            foreach ($validated['images'] as $index => $url) {
                ProductImage::create([
                    'product_id' => $product->id,
                    'url'        => $url,
                    'order'      => $index + 1
                ]);
            }
        }

        return response()->json($product->load(['categories', 'images']));
    }

    /**
     * Remove the specified product.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}
