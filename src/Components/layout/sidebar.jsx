import { Link, useLocation } from "react-router-dom"

function Sidebar() {
  const location = useLocation()
  const items = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Products", path: "/products" },
    { name: "Orders", path: "/orders" },
    { name: "Customers", path: "/customers" },
    { name: "Settings", path: "/settings" },
  ]

  return (
    <aside className="w-64 bg-gradient-to-b from-white to-gray-50 border-r h-screen fixed p-6 shadow-sm">
      <Link to="/dashboard" className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">A</div>
        <div>
          <h1 className="font-bold">Admin Panel</h1>
          <p className="text-xs text-gray-500">Manage your store</p>
        </div>
      </Link>

      <nav className="space-y-2 text-gray-700">
        {items.map(item => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`px-3 py-2 rounded-lg transition flex items-center gap-3 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isActive ? "bg-white" : "bg-blue-200"}`}></span>
              <span className="text-sm">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
export default Sidebar
