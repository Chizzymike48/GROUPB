function Header() {
  return (
    <div className="bg-white p-4 border-b flex justify-between items-center">

      <input
        placeholder="Search products, orders..."
        className="border px-3 py-2 rounded w-96"
      />

      <div className="flex gap-4 items-center">
        🔔
        <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
      </div>

    </div>
  )
}
export default Header