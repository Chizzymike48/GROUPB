import { useMemo, useState } from "react"
import AdminLayout from "../../layout/adminlayout"
import ProductsFilter from "./ProductsFilter"
import ProductGrid from "./ProductsGrid"
import ProductsHeader from "./ProductsHeader"

const PRODUCTS = [
  {
    id: 1,
    title: "MacBook Pro 14",
    category: "Laptops",
    price: 1999,
    stock: 15,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    category: "Phones",
    price: 999,
    stock: 32,
    image: "https://images.unsplash.com/photo-1703434123142-1b41a1b1055b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    title: "AirPods Pro",
    category: "Audio",
    price: 249,
    stock: 45,
    image: "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "Headphones XYZ",
    category: "Audio",
    price: 109,
    stock: 45,
    image: "https://media.istockphoto.com/id/1193757139/photo/red-headphones-isolated.jpg?s=612x612&w=0&k=20&c=7ViJmEYlW8eySYqG2yB08_zCbf7TD7IudqhbEf6FGpc="
  },
  {
    id: 5,
    title: "Smartwatch ABC",
    category: "Mobile",
    price: 289,
    stock: 45,
    image: "https://images.unsplash.com/photo-1758348844355-2ef28345979d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    title: "Drone 123",
    category: "Mobile",
    price: 229,
    stock: 45,
    image: "https://images.unsplash.com/photo-1662348316911-d6aef85f8560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmUlMjAxMjN8ZW58MHx8MHx8fDA%3D"
  },
]

function ProductsPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All Categories")

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return PRODUCTS.filter(p => {
      // filter by category if selected
      if (category && category !== "All Categories" && p.category !== category) return false

      if (!q) return true

      // match by prefix of title or category (first letters)
      return p.title.toLowerCase().startsWith(q) || p.category.toLowerCase().startsWith(q)
    })
  }, [search, category])

  return (
    <AdminLayout>
      <ProductsHeader />
      <ProductsFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      <ProductGrid products={filtered} />
    </AdminLayout>
  )
}
export default ProductsPage
