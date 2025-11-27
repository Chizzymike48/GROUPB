import StockBadge from "./StockBadge"
import ProductActions from "./ProductActions"

function ProductCard({ product, onEdit, onDelete }) {
  const { title, image, category, price, stock } = product

  return (
    <div className="bg-white shadow rounded overflow-hidden">

      <img src={image} className="h-40 w-full object-cover" />

      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>

        <span className="text-xs bg-gray-200 px-2 py-1 rounded">
          {category}
        </span>

        <p className="font-bold mt-2">${price}</p>
        <p className="text-sm text-gray-600">Stock: {stock} units</p>

        <StockBadge stock={stock} />
        <ProductActions onEdit={onEdit} onDelete={onDelete} />

      </div>
    </div>
  )
}
export default ProductCard
