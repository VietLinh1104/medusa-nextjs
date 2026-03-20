import React from "react"
import Link from "next/link"

const ProductCard = ({ id, name, price }: { id: string, name: string, price: string }) => {
  return (
    <Link href={`/products/${id}`} className="group block">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100 border border-gray-100 group-hover:border-gray-300 transition-all aspect-square relative">
        {/* Placeholder Image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-xs font-medium uppercase tracking-widest">
           Product Image
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <p className="mt-1 text-xs text-gray-500 uppercase">Category</p>
        </div>
        <p className="text-sm font-semibold text-gray-900">{price}</p>
      </div>
    </Link>
  )
}

export default ProductCard
