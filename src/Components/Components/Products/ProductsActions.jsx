function ProductActions({ onEdit, onDelete }) {
  return (
    <div className="flex justify-between mt-3">
      <button onClick={onEdit} className="text-blue-600">Edit</button>
      <button onClick={onDelete} className="text-red-600">Delete</button>
    </div>
  )
}
export default ProductActions
