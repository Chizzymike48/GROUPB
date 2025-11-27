function ProductsHeader() {
  return (
    <div className="flex justify-between mb-4">
      <div>
        <h2 className="text-xl font-bold">Products</h2>
        <p className="text-sm text-gray-500">Manage your inventory</p>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        + Add New Product
      </button>
    </div>
  )
}
export default ProductsHeader
