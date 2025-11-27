function StockBadge({ stock }) {
  return (
    <span className={`text-xs px-2 py-1 rounded 
      ${stock > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
      {stock > 0 ? "In Stock" : "Out of Stock"}
    </span>
  )
}
export default StockBadge
