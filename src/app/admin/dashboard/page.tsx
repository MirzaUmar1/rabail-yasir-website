import { getProducts, createProduct, deleteProduct } from "@/app/actions/product";
import { Plus, Trash2 } from "lucide-react";
import Image from "next/image";

export default async function DashboardPage() {
  const products = await getProducts();

  return (
    <div className="flex flex-col gap-8">
      {/* Add Product Form */}
      <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
        <form action={createProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Product Name"
            required
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          <input
            name="price"
            type="number"
            step="0.01"
            placeholder="Price"
            required
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          <input
            name="imageUrl"
            placeholder="Image URL (e.g. Unsplash)"
            required
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 md:col-span-2"
          />
          <textarea
            name="description"
            placeholder="Product Description"
            required
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 md:col-span-2"
          />
          <div className="flex items-center gap-2 md:col-span-2">
            <input type="checkbox" name="isSustainable" id="isSustainable" defaultChecked className="w-4 h-4 text-black border-gray-300 rounded" />
            <label htmlFor="isSustainable" className="text-sm font-medium">Sustainable Material</label>
          </div>
          <button type="submit" className="md:col-span-2 bg-gray-900 text-white font-medium px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </form>
      </section>

      {/* Product List */}
      <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Inventory</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium">
              <tr>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">No products found. Add one above!</td>
                </tr>
              ) : null}

              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="px-6 py-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded relative overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image src={product.imageUrl} alt={product.name} fill className="object-cover" unoptimized />
                    </div>
                    <span className="font-medium text-gray-900">{product.name}</span>
                  </td>
                  <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    {product.isSustainable ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Sustainable</span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">Standard</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <form action={async () => {
                      "use server";
                      await deleteProduct(product.id);
                    }}>
                      <button type="submit" className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
