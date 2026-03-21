import React from "react"
import ProductCard from "@/components/product-card"

type Product = {
  id: string
  name: string
  price: string
  isSoldOut?: boolean
  mgoBadge?: string
}

type ViewedProductsProps = {
  products: Product[]
}

const ViewedProducts = ({ products }: ViewedProductsProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-[18px] font-bold text-gray-800 uppercase mb-6 flex items-center">
        Sản phẩm đã xem
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            {...p}
            mgoBadge={p.id === 'v1' ? '30+' : p.id === 'v3' ? '100+' : p.id === 'v4' ? '550+' : undefined}
          />
        ))}
      </div>
    </div>
  )
}

export default ViewedProducts
