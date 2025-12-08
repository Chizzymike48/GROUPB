import AdminLayout from "../Components/layout/adminlayout"

function Dashboard() {
  const stats = [
    { label: "Total Orders", value: 1234, color: "bg-blue-500" },
    { label: "Total Revenue", value: "$45,231", color: "bg-green-500" },
    { label: "Total Products", value: 156, color: "bg-purple-500" },
    { label: "Active Users", value: 892, color: "bg-orange-500" },
  ]

  const recentOrders = [
    { id: "#ORD001", customer: "John Doe", amount: "$299", status: "Completed", date: "Dec 7" },
    { id: "#ORD002", customer: "Jane Smith", amount: "$149", status: "Pending", date: "Dec 6" },
    { id: "#ORD003", customer: "Bob Johnson", amount: "$599", status: "Shipped", date: "Dec 5" },
    { id: "#ORD004", customer: "Alice Brown", amount: "$89", status: "Completed", date: "Dec 4" },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Shipped":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your business overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className={`${stat.color} h-12 w-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                📊
              </div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Customer</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{order.amount}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Dashboard
