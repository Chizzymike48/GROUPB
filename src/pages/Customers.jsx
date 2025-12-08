import { useState } from "react"
import AdminLayout from "../Components/layout/adminlayout"

function Customers() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "+1 (555) 123-4567", orders: 5, totalSpent: "$1,245.50", joinDate: "Jan 15, 2024", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+1 (555) 234-5678", orders: 8, totalSpent: "$2,890.00", joinDate: "Feb 20, 2024", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "+1 (555) 345-6789", orders: 3, totalSpent: "$567.99", joinDate: "Mar 10, 2024", status: "Active" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", phone: "+1 (555) 456-7890", orders: 12, totalSpent: "$4,123.75", joinDate: "Apr 5, 2024", status: "Active" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", phone: "+1 (555) 567-8901", orders: 2, totalSpent: "$345.00", joinDate: "May 22, 2024", status: "Inactive" },
    { id: 6, name: "Diana Martinez", email: "diana@example.com", phone: "+1 (555) 678-9012", orders: 7, totalSpent: "$1,876.50", joinDate: "Jun 18, 2024", status: "Active" },
  ])

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "" })

  const filteredCustomers = customers.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === "All" || c.status === filter
    return matchesSearch && matchesFilter
  })

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.phone) {
      setCustomers([...customers, {
        id: customers.length + 1,
        ...newCustomer,
        orders: 0,
        totalSpent: "$0.00",
        joinDate: new Date().toLocaleDateString(),
        status: "Active"
      }])
      setNewCustomer({ name: "", email: "", phone: "" })
      setShowForm(false)
    }
  }

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter(c => c.id !== id))
  }

  const getStatusColor = (status) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
            <p className="text-gray-600">Manage and track all your customers</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
          >
            + Add Customer
          </button>
        </div>

        {/* Add Customer Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">Add New Customer</h2>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Customer Name"
                value={newCustomer.name}
                onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                className="border px-4 py-2 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                value={newCustomer.email}
                onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                className="border px-4 py-2 rounded-lg"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={newCustomer.phone}
                onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                className="border px-4 py-2 rounded-lg"
              />
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAddCustomer}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium"
              >
                Save Customer
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Search & Filter */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border px-4 py-2 rounded-lg"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Orders</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Spent</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Join Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{customer.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{customer.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{customer.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{customer.orders}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{customer.totalSpent}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{customer.joinDate}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button
                        onClick={() => setSelectedCustomer(customer)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDeleteCustomer(customer.id)}
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Stats */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Total Customers</p>
            <p className="text-2xl font-bold text-gray-800">{customers.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Active Customers</p>
            <p className="text-2xl font-bold text-green-600">{customers.filter(c => c.status === "Active").length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Total Revenue</p>
            <p className="text-2xl font-bold text-blue-600">
              ${customers.reduce((sum, c) => sum + parseFloat(c.totalSpent.replace(/[$,]/g, "")), 0).toFixed(2)}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Avg. Orders/Customer</p>
            <p className="text-2xl font-bold text-purple-600">
              {(customers.reduce((sum, c) => sum + c.orders, 0) / customers.length).toFixed(1)}
            </p>
          </div>
        </div>

        {/* Customer Detail Modal */}
        {selectedCustomer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Customer Details</h2>
              <div className="space-y-3 mb-6">
                <p><span className="font-medium">Name:</span> {selectedCustomer.name}</p>
                <p><span className="font-medium">Email:</span> {selectedCustomer.email}</p>
                <p><span className="font-medium">Phone:</span> {selectedCustomer.phone}</p>
                <p><span className="font-medium">Orders:</span> {selectedCustomer.orders}</p>
                <p><span className="font-medium">Total Spent:</span> {selectedCustomer.totalSpent}</p>
                <p><span className="font-medium">Join Date:</span> {selectedCustomer.joinDate}</p>
                <p><span className="font-medium">Status:</span> {selectedCustomer.status}</p>
              </div>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
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

export default Customers
