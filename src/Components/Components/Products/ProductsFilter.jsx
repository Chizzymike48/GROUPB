function ProductsFilter() {
  return (
    <div className="flex justify-between mb-6">

      <input
        placeholder="Search products..."
        className="border px-3 py-2 rounded w-72"
      />

      <select className="border px-3 py-2 rounded">
        <option>All Categories</option>
        <option>Laptops</option>
        <option>Phones</option>
        <option>Audio</option>
      </select>

    </div>
  )
}
export default ProductsFilter
