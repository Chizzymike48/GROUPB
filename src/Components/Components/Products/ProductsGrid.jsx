import ProductCard from "./ProductCard"

function ProductGrid({ products = [] }) {
  const handleEdit = (item) => alert("Editing " + item.title)
  const handleDelete = (item) => alert("Deleting " + item.title)

  if (!products.length) return <p className="text-gray-600">No products match your search.</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
