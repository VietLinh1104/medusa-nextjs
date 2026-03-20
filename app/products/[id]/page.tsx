import React from "react"
import Link from "next/link"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-8 text-xs font-medium uppercase tracking-wider text-gray-400">
        <Link href="/" className="hover:text-black">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-black">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Product {params.id}</span>
      </nav>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
        {/* Image Gallery Placeholder */}
        <div className="flex flex-col gap-4">
          <div className="aspect-square bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-300 uppercase tracking-widest text-sm font-bold">
            Main Product Image
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-200 text-[10px] uppercase">
                IMG {i}
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 uppercase">Premium Cotton Sweatshirt</h1>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900 font-semibold">$145.00</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              This premium sweatshirt is crafted from the finest organic cotton, providing unmatched comfort and a timeless silhouette. Perfect for layering or wearing on its own.
            </p>
          </div>

          <form className="mt-10">
            {/* Size Selector Wireframe */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">Size</h3>
              <div className="grid grid-cols-4 gap-4 mt-4 text-xs font-bold uppercase">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <div key={size} className="border border-gray-200 py-3 text-center cursor-pointer hover:border-black transition-colors">
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="mt-10 w-full bg-black border border-transparent py-4 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 transition-colors uppercase tracking-widest"
            >
              Add to Cart
            </button>
          </form>

          <footer className="mt-12 border-t border-gray-100 pt-8 space-y-4">
            <details className="group">
              <summary className="list-none cursor-pointer flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-900">
                Shipping & Returns
                <span className="text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-sm text-gray-500">Free shipping on all domestic orders. Returns accepted within 30 days.</p>
            </details>
            <details className="group border-t border-gray-100 pt-4">
              <summary className="list-none cursor-pointer flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-900">
                Materials & Care
                <span className="text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-sm text-gray-500">100% Organic Cotton. Machine wash cold.</p>
            </details>
          </footer>
        </div>
      </div>
    </div>
  )
}
