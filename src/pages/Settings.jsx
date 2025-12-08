import { useState } from "react"
import AdminLayout from "../Components/layout/adminlayout"

function Settings() {
  const [settings, setSettings] = useState({
    storeName: "My Admin Store",
    email: "admin@store.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Street, City, State 12345",
    currency: "USD",
    timezone: "UTC-5",
    notifications: true,
    emailNotifications: true,
    pushNotifications: false,
    twoFactorAuth: false,
  })

  const [hasChanges, setHasChanges] = useState(false)

  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value })
    setHasChanges(true)
  }

  const handleSave = () => {
    setHasChanges(false)
    alert("Settings saved successfully!")
  }

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-2xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-600">Manage your store and account settings</p>
        </div>

        {/* Store Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Store Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
              <input
                type="text"
                value={settings.storeName}
                onChange={(e) => handleChange("storeName", e.target.value)}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                value={settings.address}
                onChange={(e) => handleChange("address", e.target.value)}
                rows={3}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                <select
                  value={settings.currency}
                  onChange={(e) => handleChange("currency", e.target.value)}
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>JPY</option>
                  <option>INR</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                <select
                  value={settings.timezone}
                  onChange={(e) => handleChange("timezone", e.target.value)}
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option>UTC-8</option>
                  <option>UTC-5</option>
                  <option>UTC</option>
                  <option>UTC+1</option>
                  <option>UTC+5:30</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-gray-800">All Notifications</p>
                <p className="text-sm text-gray-600">Receive all system notifications</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleChange("notifications", e.target.checked)}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Email Notifications</p>
                <p className="text-sm text-gray-600">Get notified via email</p>
              </div>
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => handleChange("emailNotifications", e.target.checked)}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Push Notifications</p>
                <p className="text-sm text-gray-600">Receive browser push notifications</p>
              </div>
              <input
                type="checkbox"
                checked={settings.pushNotifications}
                onChange={(e) => handleChange("pushNotifications", e.target.checked)}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Security</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">Add an extra layer of security</p>
              </div>
              <input
                type="checkbox"
                checked={settings.twoFactorAuth}
                onChange={(e) => handleChange("twoFactorAuth", e.target.checked)}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 font-medium">
              Change Password
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            disabled={!hasChanges}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              hasChanges
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Save Changes
          </button>
          <button
            onClick={() => {
              setHasChanges(false)
              setSettings({
                storeName: "My Admin Store",
                email: "admin@store.com",
                phone: "+1 (555) 123-4567",
                address: "123 Business Street, City, State 12345",
                currency: "USD",
                timezone: "UTC-5",
                notifications: true,
                emailNotifications: true,
                pushNotifications: false,
                twoFactorAuth: false,
              })
            }}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 font-medium"
          >
            Reset
          </button>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Settings
