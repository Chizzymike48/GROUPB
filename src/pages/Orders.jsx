import { useState } from "react"
import AdminLayout from "../Components/layout/adminlayout"

function Orders() {
  const [orders, setOrders] = useState([
    { id: "#ORD001", customer: "John Doe", amount: "$299.99", status: "Completed", date: "Dec 7, 2025", items: 3 },
    { id: "#ORD002", customer: "Jane Smith", amount: "$149.50", status: "Pending", date: "Dec 6, 2025", items: 2 },
    { id: "#ORD003", customer: "Bob Johnson", amount: "$599.00", status: "Shipped", date: "Dec 5, 2025", items: 5 },
    { id: "#ORD004", customer: "Alice Brown", amount: "$89.99", status: "Completed", date: "Dec 4, 2025", items: 1 },
    { id: "#ORD005", customer: "Charlie Wilson", amount: "$459.00", status: "Processing", date: "Dec 3, 2025", items: 4 },
  ])

  const [filter, setFilter] = useState("All")
  const [selectedOrder, setSelectedOrder] = useState(null)

  const filteredOrders = filter === "All" ? orders : orders.filter(o => o.status === filter)

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Shipped":
        return "bg-blue-100 text-blue-800"
      case "Processing":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o))
    setSelectedOrder(null)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
            <p className="text-gray-600">Manage and track all customer orders</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            + New Order
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          {["All", "Completed", "Pending", "Shipped", "Processing"].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === status
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Order ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Items</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.items}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{order.amount}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View/Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Detail Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Update Order Status</h2>
              <p className="text-gray-600 mb-4">Order: {selectedOrder.id}</p>
              <div className="space-y-2 mb-6">
                {["Pending", "Processing", "Shipped", "Completed"].map(status => (
                  <button
                    key={status}
                    onClick={() => updateOrderStatus(selectedOrder.id, status)}
                    className={`w-full px-4 py-2 rounded-lg font-medium transition text-left ${
                      selectedOrder.status === status
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

export default Orders
