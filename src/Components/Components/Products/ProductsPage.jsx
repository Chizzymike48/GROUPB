import AdminLayout from "../layout/AdminLayout"
import ProductsHeader from "./ProductsHeader"
import ProductsFilter from "./ProductsFilter"
import ProductGrid from "./ProductGrid"

function ProductsPage() {
  return (
    <AdminLayout>
      <ProductsHeader />
      <ProductsFilter />
      <ProductGrid />
    </AdminLayout>
  )
}
export default ProductsPage
