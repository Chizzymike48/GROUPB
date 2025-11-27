function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen fixed p-5">
      <h1 className="font-bold mb-6">Admin Panel</h1>

      <nav className="space-y-4 text-gray-700">
        {["Dashboard", "Products", "Orders", "Customers", "Settings"].map(item => (
          <p key={item} className="hover:text-blue-600 cursor-pointer">{item}</p>
        ))}
      </nav>
    </aside>
  )
}
export default Sidebar