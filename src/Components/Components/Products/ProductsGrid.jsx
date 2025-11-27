import ProductCard from "./ProductCard"

const products = [
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
    image: "https://images.unsplash.com/photo-1603898037225-2b9ec71b1dd4"
  },
  {
    id: 3,
    title: "AirPods Pro",
    category: "Audio",
    price: 249,
    stock: 45,
    image: "https://store.storeimages.cdn-apple.com/is/MQD83"
  }
]

function ProductGrid() {

  const handleEdit = (item) => alert("Editing " + item.title)
  const handleDelete = (item) => alert("Deleting " + item.title)

  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map(item => (
        <ProductCard
          key={item.id}
          product={item}
          onEdit={() => handleEdit(item)}
          onDelete={() => handleDelete(item)}
        />
      ))}
    </div>
  )
}

export default ProductGrid
