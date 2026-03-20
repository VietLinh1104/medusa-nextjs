import React from "react"
import Link from "next/link"
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

          {/* HEADER */}
          <p className="text-[#e85a31] text-[17px] font-medium ">{subtitle}</p>
          <h2 className="text-2xl sm:text-[34px] font-bold text-gray-500 uppercase">{title}</h2>
          <div className="w-8 h-1 bg-[#e85a31] mx-auto my-4"></div>

          <Link href="/products" className="inline-block mt-5 text-white px-10 py-3 font-bold bg-[#e85a31] transition-colors uppercase tracking-widest text-xs">
            MUA NGAY BÂY GIỜ
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-y-12 gap-x-8 sm:grid-cols-3 lg:grid-cols-4">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
