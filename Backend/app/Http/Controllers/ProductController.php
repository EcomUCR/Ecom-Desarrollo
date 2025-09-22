<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Listar todos los productos
     */
    public function index()
    {
        return Product::with(['categories', 'images', 'vendor'])->get();
    }

    /**
     * Mostrar un solo producto
     */
    public function show($id)
    {
        return Product::with(['categories', 'images', 'vendor'])->findOrFail($id);
    }

    /**
     * Crear un producto
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'price'       => 'required|numeric',
            'discount'    => 'nullable|numeric',
            'stock'       => 'required|integer',
            'status'      => 'required|boolean',
            'categories'  => 'array',
            'categories.*'=> 'exists:categories,id',
            'images.*'    => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $vendorId = Auth::user()->vendor->id;

        $product = Product::create([
            'name'        => $validated['name'],
            'description' => $validated['description'] ?? null,
            'price'       => $validated['price'],
            'discount'    => $validated['discount'] ?? 0,
            'stock'       => $validated['stock'],
            'status'      => $validated['status'],
            'vendor_id'   => $vendorId,
        ]);

        // Categorías
        if (!empty($validated['categories'])) {
            $product->categories()->sync($validated['categories']);
        }

        // Subir imágenes (múltiples)
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $index => $file) {
                $path = $file->store('products', 'public');
                $product->images()->create([
                    'url'   => $path,
                    'order' => $index + 1,
                ]);
            }
        }

        return response()->json($product->load(['categories', 'images']), 201);
    }

    /**
     * Actualizar un producto
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'price'       => 'required|numeric',
            'discount'    => 'nullable|numeric',
            'stock'       => 'required|integer',
            'status'      => 'required|boolean',
            'categories'  => 'array',
            'categories.*'=> 'exists:categories,id',
            'images.*'    => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $product = Product::findOrFail($id);

        // 🔹 Validar que el producto sea del vendor logueado
        if ($product->vendor_id !== Auth::user()->vendor->id) {
            return response()->json(['error' => 'No autorizado'], 403);
        }

        $product->update([
            'name'        => $validated['name'],
            'description' => $validated['description'] ?? null,
            'price'       => $validated['price'],
            'discount'    => $validated['discount'] ?? 0,
            'stock'       => $validated['stock'],
            'status'      => $validated['status'],
        ]);

        // Categorías
        if (!empty($validated['categories'])) {
            $product->categories()->sync($validated['categories']);
        }

        // Reemplazar imágenes (opcional)
        if ($request->hasFile('images')) {
            // Borrar imágenes anteriores
            $product->images()->delete();

            foreach ($request->file('images') as $index => $file) {
                $path = $file->store('products', 'public');
                $product->images()->create([
                    'url'   => $path,
                    'order' => $index + 1,
                ]);
            }
        }

        return response()->json($product->load(['categories', 'images']), 200);
    }

    /**
     * Eliminar un producto
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        if ($product->vendor_id !== Auth::user()->vendor->id) {
            return response()->json(['error' => 'No autorizado'], 403);
        }

        $product->delete();

        return response()->json(['message' => 'Producto eliminado correctamente']);
    }

    /**
     * Buscar productos por nombre
     */
    public function search(Request $request)
    {
        $query = Product::query();

        if ($search = $request->input('q')) {
            $query->where('name', 'like', "%$search%");
        }

        return $query->with(['categories', 'images'])->get();
    }

    /**
     * Productos por vendor
     */
    public function byVendor($vendorId)
    {
        return Product::with(['categories', 'images'])
            ->where('vendor_id', $vendorId)
            ->get();
    }
}
