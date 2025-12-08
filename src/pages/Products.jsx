import { useState } from "react"
import AdminLayout from "../Components/layout/adminlayout"

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "MacBook Pro 14", category: "Laptops", price: "$1,999", stock: 15, status: "Active" },
    { id: 2, name: "iPhone 15 Pro", category: "Phones", price: "$999", stock: 32, status: "Active" },
    { id: 3, name: "AirPods Pro", category: "Audio", price: "$249", stock: 45, status: "Active" },
    { id: 4, name: "Headphones XYZ", category: "Audio", price: "$109", stock: 45, status: "Active" },
    { id: 5, name: "Smartwatch ABC", category: "Mobile", price: "$289", stock: 12, status: "Low Stock" },
    { id: 6, name: "Drone 123", category: "Mobile", price: "$229", stock: 8, status: "Low Stock" },
  ])

  const [search, setSearch] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", stock: "" })

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.price && newProduct.stock) {
      setProducts([...products, {
        id: products.length + 1,
        ...newProduct,
        status: parseInt(newProduct.stock) > 10 ? "Active" : "Low Stock"
      }])
      setNewProduct({ name: "", category: "", price: "", stock: "" })
      setShowAddForm(false)
    }
  }

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

  const getStatusColor = (status) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Products</h1>
            <p className="text-gray-600">Manage your product inventory</p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
          >
            + Add Product
          </button>
        </div>

        {/* Add Product Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">Add New Product</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="border px-4 py-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="border px-4 py-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="border px-4 py-2 rounded-lg"
              />
              <input
                type="number"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                className="border px-4 py-2 rounded-lg"
              />
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAddProduct}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium"
              >
                Save Product
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="Search products by name or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{product.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{product.price}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.stock} units</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Total Products</p>
            <p className="text-2xl font-bold text-gray-800">{products.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Low Stock Items</p>
            <p className="text-2xl font-bold text-red-600">{products.filter(p => p.status === "Low Stock").length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Total Stock Value</p>
            <p className="text-2xl font-bold text-gray-800">High</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Products
