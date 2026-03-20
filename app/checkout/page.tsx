import React from "react"
import Link from "next/link"

export default function CheckoutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 uppercase mb-12 text-center lg:text-left">Checkout</h1>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
          {/* Left Column: Form */}
          <div className="space-y-12">
            {/* Shipping Info */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">1. Shipping Information</h2>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                 <div className="col-span-2">
                   <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                   <input type="email" className="block w-full border-gray-200 border px-4 py-3 focus:border-black focus:ring-0 text-sm outline-none" placeholder="you@example.com" />
                 </div>
                 <div>
                   <label htmlFor="first-name" className="block text-xs font-bold uppercase text-gray-500 mb-2">First Name</label>
                   <input type="text" className="block w-full border-gray-200 border px-4 py-3 focus:border-black focus:ring-0 text-sm outline-none" />
                 </div>
                 <div>
                   <label htmlFor="last-name" className="block text-xs font-bold uppercase text-gray-500 mb-2">Last Name</label>
                   <input type="text" className="block w-full border-gray-200 border px-4 py-3 focus:border-black focus:ring-0 text-sm outline-none" />
                 </div>
                 <div className="col-span-2">
                   <label htmlFor="address" className="block text-xs font-bold uppercase text-gray-500 mb-2">Address</label>
                   <input type="text" className="block w-full border-gray-200 border px-4 py-3 focus:border-black focus:ring-0 text-sm outline-none" />
                 </div>
              </div>
            </section>

            {/* Payment Method */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">2. Payment Method</h2>
              <div className="space-y-4">
                 {['Credit Card', 'PayPal', 'Bank Transfer'].map((method) => (
                   <div key={method} className="border border-gray-200 p-4 flex items-center justify-between cursor-pointer hover:border-black transition-colors group">
                     <span className="text-sm font-medium uppercase tracking-wider">{method}</span>
                     <div className="w-4 h-4 border-2 border-gray-200 rounded-full group-hover:border-black"></div>
                   </div>
                 ))}
              </div>
            </section>

            <button className="w-full bg-black text-white py-5 font-bold uppercase tracking-[0.2em] text-lg hover:bg-gray-800 transition-colors">
               Place Order
            </button>
          </div>

          {/* Right Column: Mini Summary */}
          <div className="mt-16 lg:mt-0">
             <div className="bg-gray-50 border border-gray-100 p-8 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-6">Your Order</h2>
                <ul className="divide-y divide-gray-200">
                   {[1, 2].map((i) => (
                     <li key={i} className="py-4 flex items-center justify-between">
                        <div className="flex items-center">
                           <div className="h-12 w-12 bg-gray-200 flex-shrink-0 flex items-center justify-center text-[10px] uppercase text-gray-400">Box</div>
                           <div className="ml-4">
                              <p className="text-sm font-bold uppercase text-gray-900">Product Title {i}</p>
                              <p className="text-xs text-gray-500">Qty: 1</p>
                           </div>
                        </div>
                        <p className="text-sm font-bold text-gray-900">$00.00</p>
                     </li>
                   ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-4 text-sm uppercase tracking-wider">
                   <div className="flex justify-between text-gray-500">
                      <span>Subtotal</span>
                      <span>$180.00</span>
                   </div>
                   <div className="flex justify-between text-gray-500">
                      <span>Shipping</span>
                      <span>Free</span>
                   </div>
                   <div className="flex justify-between text-gray-900 font-bold text-lg pt-4 border-t border-gray-100">
                      <span>Total</span>
                      <span>$194.40</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
