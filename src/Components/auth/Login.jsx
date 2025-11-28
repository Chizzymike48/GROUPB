import { useState } from "react"

function Login({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // simple demo auth: admin / admin
    if (email === "admin" && password === "admin") {
      onLogin()
    } else {
      setError("Invalid credentials. Try admin / admin")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white">
      <form onSubmit={handleSubmit} className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>

        <label className="block text-sm text-gray-600">Username</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <label className="block text-sm text-gray-600">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Sign in</button>
      </form>
    </div>
  )
}

export default Login
