import React from "react"
import ProductCard from "@/components/product-card"

const ProductGrid = ({ title, subtitle }: { title: string, subtitle: string }) => {
  const dummyProducts = [
    { id: "1", name: "Manuka Honey MGO 100+", price: "$45.00" },
    { id: "2", name: "Manuka Honey MGO 250+", price: "$65.00", isSoldOut: true },
    { id: "3", name: "Manuka Honey MGO 550+", price: "$85.00" },
    { id: "4", name: "Manuka Honey MGO 850+", price: "$120.00" },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-400 font-medium text-xs uppercase tracking-[0.3em] mb-4 italic">{subtitle}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest">{title}</h2>
          <div className="w-8 h-1 bg-[#e85a31] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
