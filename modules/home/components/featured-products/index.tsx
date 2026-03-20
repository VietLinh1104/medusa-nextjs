import React from "react"
import ProductCard from "@/components/product-card"

const FeaturedProducts = () => {
  const dummyProducts = [
    { id: "1", name: "Classic Cotton Tee", price: "$35.00" },
    { id: "2", name: "Tailored Linen Shirt", price: "$85.00" },
    { id: "3", name: "Premium Denim Jeans", price: "$120.00" },
    // { id: "4", name: "Minimalist Leather Bag", price: "$150.00" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
          <p className="mt-1 text-sm text-gray-500 underline decoration-gray-300 decoration-offset-4 decoration-2">Explore our best sellers</p>
        </div>
        <button className="text-sm font-medium text-gray-500 hover:text-black">
          View all categories &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
