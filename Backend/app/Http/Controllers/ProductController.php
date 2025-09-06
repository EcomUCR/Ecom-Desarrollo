<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Vendor;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Listar productos con su vendor e imágenes.
     */
    public function index()
    {
        $products = Product::with(['vendor', 'images'])->paginate(10);
        return response()->json($products);
    }

    /**
     * Crear producto.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'sku'         => 'required|string|max:30|unique:products',
            'name'        => 'required|string|max:50',
            'description' => 'nullable|string',
            'discount'    => 'integer|min:0',
            'stock'       => 'integer|min:0',
            'price'       => 'required|numeric|min:0',
            'status'      => 'boolean',
            'vendor_id'   => 'required|exists:vendors,id',
        ]);

        $product = Product::create($validated);

        return response()->json($product->load(['vendor', 'images']), 201);
    }

    /**
     * Ver un producto específico.
     */
    public function show(Product $product)
    {
        return response()->json($product->load(['vendor', 'images']));
    }

    /**
     * Actualizar producto.
     */
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'sku'         => 'string|max:30|unique:products,sku,' . $product->id,
            'name'        => 'string|max:50',
            'description' => 'nullable|string',
            'discount'    => 'integer|min:0',
            'stock'       => 'integer|min:0',
            'price'       => 'numeric|min:0',
            'status'      => 'boolean',
            'vendor_id'   => 'exists:vendors,id',
        ]);

        $product->update($validated);

        return response()->json($product->load(['vendor', 'images']));
    }

    /**
     * Eliminar producto.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}
