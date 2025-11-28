import Sidebar from "./sidebar"
import Header from "./header"

function AdminLayout({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 w-full">
        <Header />
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
export default AdminLayout
