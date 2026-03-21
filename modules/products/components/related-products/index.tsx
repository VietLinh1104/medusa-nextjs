import React from "react"
import ProductCard from "@/components/product-card"

type Product = {
  id: string
  name: string
  price: string
  isSoldOut?: boolean
  mgoBadge?: string
}

type RelatedProductsProps = {
  products: Product[]
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-sm shadow-sm lg:sticky lg:top-24">
        <h2 className="text-[18px] font-bold text-gray-800 uppercase mb-6 border-b pb-4">
          Sản phẩm liên quan
        </h2>
        <div className="space-y-8 max-h-[1000px] overflow-y-auto pr-2 custom-scrollbar">
          {products.map((p) => (
            <div key={p.id} className="space-y-3 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
              <ProductCard {...p} mgoBadge={p.id === 'rp1' ? '100+' : '550+'} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #999;
        }
      `}</style>
    </div>
  )
}

export default RelatedProducts
