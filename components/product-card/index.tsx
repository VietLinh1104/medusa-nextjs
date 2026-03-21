"use client"

import React from "react"
import Link from "next/link"

const ProductCard = ({ id, name, price, isSoldOut, mgoBadge }: { id: string, name: string, price: string, isSoldOut?: boolean, mgoBadge?: string }) => {
  return (
    <Link href={`/products/${id}`} className="group block border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        {/* Sold Out Badge */}
        {isSoldOut && (
          <div className="absolute top-2 left-2 z-20 bg-black/70 px-[10px] py-[5px] rounded-full opacity-80">
            <p className="text-white text-[10px] font-bold h-fit w-fit tracking-wider uppercase">Hết hàng</p>
          </div>
        )}

        {/* MGO Badge */}
        {mgoBadge && (
          <div className="absolute top-2 right-2 z-20 w-10 h-10 bg-black/80 rounded-full flex flex-col items-center justify-center text-white border border-white scale-75">
            <span className="text-[6px] leading-[6px] font-bold">MGO</span>
            <span className="text-[12px] leading-[12px] font-bold">{mgoBadge}</span>
          </div>
        )}

        <div className="flex w-[200%] h-full transition-transform duration-500 ease-in-out group-hover:-translate-x-1/2">
          {/* First Image */}
          <div className="w-1/2 h-full relative">
            <img
              src={`https://placehold.co/600x800/f3f4f6/9ca3af?text=${encodeURIComponent(name)}+1`}
              alt={name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* Second Image (Visible on Hover) */}
          <div className="w-1/2 h-full relative">
            <img
              src={`https://placehold.co/600x800/e5e7eb/4b5563?text=${encodeURIComponent(name)}+2`}
              alt={`${name} hover`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="px-[15px] py-[20px] relative overflow-hidden bg-white">
        <h3 className="text-sm text-center font-medium text-gray-900 line-clamp-2 h-10 flex items-center justify-center mb-2">
          {name}
        </h3>

        <div className="relative h-8 flex items-center justify-center overflow-hidden">
          {/* Price */}
          <p className="text-sm font-semibold text-gray-900 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
            {price}
          </p>

          {/* Add to Cart Button */}
          <button
            disabled={isSoldOut}
            className={`absolute inset-0 py-2 border-2 rounded-md border-gray-100 uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center text-[11px] font-bold ${isSoldOut
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-[#e85a31] text-black hover:text-white"
              }`}
            onClick={(e) => {
              e.preventDefault();
              if (!isSoldOut) {
                // Add to cart logic would go here
              }
            }}
          >
            {isSoldOut ? "Hết hàng" : "Thêm vào giỏ"}
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
