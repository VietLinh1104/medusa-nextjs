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
      <div className="bg-white p-6 rounded-sm shadow-sm sticky top-24">
        <h2 className="text-[18px] font-bold text-gray-800 uppercase mb-6 border-b pb-4">
          Sản phẩm liên quan
        </h2>
        <div className="space-y-8 max-h-[1000px] overflow-y-auto pr-2 custom-scrollbar">
          {products.map((p) => (
            <div key={p.id} className="space-y-3 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
              <ProductCard {...p} mgoBadge={p.id === 'rp1' ? '100+' : '550+'} />
              <div className="flex border border-gray-300 rounded-sm w-fit">
                <button className="px-3 py-1 bg-gray-50 border-r border-gray-300 text-xs">-</button>
                <input type="text" value="1" readOnly className="w-8 text-center text-xs focus:outline-none" />
                <button className="px-3 py-1 bg-gray-50 border-l border-gray-300 text-xs">+</button>
              </div>
              <p className="text-[#e85a31] text-[15px] font-bold">{p.price}</p>
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
