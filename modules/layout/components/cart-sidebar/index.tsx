"use client"

import React from "react"
import Link from "next/link"
import { useCart } from "@/lib/context/cart-context"

const CartSidebar = () => {
  const { isCartOpen, closeCart } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] transition-transform duration-500 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold uppercase tracking-widest text-gray-900">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-black transition-colors text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Cart Contents */}
        <div className="flex-grow overflow-y-auto p-6 space-y-8">
           {/* Dummy Items */}
           {[1, 2].map((i) => (
             <div key={i} className="flex gap-4">
                <div className="w-20 h-20 bg-gray-100 border border-gray-100 flex items-center justify-center text-[10px] uppercase text-gray-300 shrink-0">
                  Img
                </div>
                <div className="flex flex-col justify-between py-1">
                   <div>
                      <h3 className="text-sm font-bold uppercase text-gray-900 tracking-tight">Product Title {i}</h3>
                      <p className="text-xs text-gray-500 mt-1">Size: M</p>
                   </div>
                   <p className="text-sm font-semibold text-gray-900">$145.00</p>
                </div>
             </div>
           ))}
           
           {/* Empty State placeholder if needed */}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
           <div className="flex justify-between items-center uppercase tracking-widest text-sm font-bold text-gray-900 border-b border-gray-200 pb-4">
              <span>Subtotal</span>
              <span>$290.00</span>
           </div>
           
           <div className="grid grid-cols-1 gap-4">
              <Link
                href="/cart"
                onClick={closeCart}
                className="w-full text-center bg-black text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors"
              >
                View Full Cart Details
              </Link>
           </div>
        </div>
      </div>
    </>
  )
}

export default CartSidebar
