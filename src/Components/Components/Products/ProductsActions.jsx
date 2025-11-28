function ProductActions({ onEdit, onDelete }) {
  return (
    <div className="flex gap-3">
      <button onClick={onEdit} className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition text-sm">Edit</button>
      <button onClick={onDelete} className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition text-sm">Delete</button>
    </div>
  )
}
export default ProductActions
