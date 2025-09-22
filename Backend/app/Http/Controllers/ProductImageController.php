<?php

namespace App\Http\Controllers;

use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductImageController extends Controller
{
    /**
     * Eliminar una imagen individual
     */
    public function destroy($id)
    {
        $image = ProductImage::findOrFail($id);

        // Validar que el vendor logueado sea dueño del producto
        if ($image->product->vendor_id !== Auth::user()->vendor->id) {
            return response()->json(['error' => 'No autorizado'], 403);
        }

        $image->delete();

        return response()->json(['message' => 'Imagen eliminada correctamente']);
    }

    /**
     * Actualizar el orden de la imagen
     */
    public function update(Request $request, $id)
    {
        $image = ProductImage::findOrFail($id);

        if ($image->product->vendor_id !== Auth::user()->vendor->id) {
            return response()->json(['error' => 'No autorizado'], 403);
        }

        $validated = $request->validate([
            'order' => 'required|integer|min:1',
        ]);

        $image->update($validated);

        return response()->json($image, 200);
    }
}
