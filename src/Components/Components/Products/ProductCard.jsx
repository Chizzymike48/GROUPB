import StockBadge from "../StockBadge"
import ProductActions from "./ProductsActions"

function ProductCard({ product, onEdit, onDelete }) {
  const { title, image, category, price, stock } = product

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-200">

      <div className="h-44 w-full overflow-hidden">
        <img src={image} className="h-full w-full object-cover" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>

        <span className="text-xs bg-gray-100 px-2 py-1 rounded inline-block mt-2 text-gray-700">
          {category}
        </span>

        <p className="font-bold mt-3">${price}</p>
        <p className="text-sm text-gray-600">Stock: {stock} units</p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <StockBadge stock={stock} />
          </div>
          <div>
            <ProductActions onEdit={onEdit} onDelete={onDelete} />
          </div>
        </div>

      </div>
    </div>
  )
}
export default ProductCard
