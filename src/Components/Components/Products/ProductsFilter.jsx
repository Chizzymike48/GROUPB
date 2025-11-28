function ProductsFilter({ search, setSearch, category, setCategory }) {
  return (
    <div className="flex justify-between mb-6 items-center">

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type first letters of product or category..."
        className="border px-3 py-2 rounded w-72 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border px-3 py-2 rounded bg-white focus:outline-none"
      >
        <option>All Categories</option>
        <option>Laptops</option>
        <option>Phones</option>
        <option>Audio</option>
        <option>Mobile</option>
      </select>

    </div>
  )
}
export default ProductsFilter
