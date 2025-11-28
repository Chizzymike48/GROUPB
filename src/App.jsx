
import { useState } from 'react'
import './App.css'
import ProductsPage from './Components/Components/Products/ProductsPage'
import Login from './Components/auth/Login'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />

  return (
    <ProductsPage />
  )
}

export default App
