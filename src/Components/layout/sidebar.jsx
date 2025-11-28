function Sidebar() {
  const items = ["Dashboard", "Products", "Orders", "Customers", "Settings"]

  return (
    <aside className="w-64 bg-gradient-to-b from-white to-gray-50 border-r h-screen fixed p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">A</div>
        <div>
          <h1 className="font-bold">Admin Panel</h1>
          <p className="text-xs text-gray-500">Manage your store</p>
        </div>
      </div>

      <nav className="space-y-2 text-gray-700">
        {items.map(item => (
          <div key={item} className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition flex items-center gap-3">
            <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </nav>
    </aside>
  )
}
export default Sidebar
