import React from "react"
import Link from "next/link"

const CartItem = ({ id, name, price }: { id: string, name: string, price: string }) => (
  <div className="flex py-6 border-b border-gray-100 last:border-0">
    <div className="h-24 w-24 flex-shrink-0 bg-gray-100 border border-gray-100 flex items-center justify-center text-[10px] uppercase text-gray-300">
      Img
    </div>
    <div className="ml-4 flex flex-1 flex-col justify-between">
      <div>
        <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-gray-900">
          <h3><Link href={`/products/${id}`}>{name}</Link></h3>
          <p className="ml-4">{price}</p>
        </div>
        <p className="mt-1 text-xs text-gray-400">Variant: M / Gray</p>
      </div>
      <div className="flex items-end justify-between text-xs">
        <div className="flex items-center gap-4 text-gray-500">
           <button className="hover:text-black">Decrease</button>
           <span className="font-bold text-gray-900">1</span>
           <button className="hover:text-black">Increase</button>
        </div>
        <button type="button" className="font-medium text-gray-400 hover:text-black uppercase underline decoration-gray-200 decoration-2 underline-offset-4">
          Remove
        </button>
      </div>
    </div>
  </div>
)

export default function CartPage() {
  const cartItems = [
    { id: "1", name: "Premium Cotton Sweatshirt", price: "$145.00" },
    { id: "2", name: "Classic Cotton Tee", price: "$35.00" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 uppercase mb-12">Your Shopping Bag</h1>

      <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
        <section className="lg:col-span-8">
          <div className="border-t border-gray-100">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* Summary Card */}
        <section className="mt-16 bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-4 lg:mt-0 lg:p-8 border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest">Order Summary</h2>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <dt className="text-sm text-gray-600 uppercase">Subtotal</dt>
              <dd className="text-sm font-medium text-gray-900">$180.00</dd>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <dt className="text-sm text-gray-600 uppercase">Shipping</dt>
              <dd className="text-sm font-medium text-gray-900">$0.00 (Standard)</dd>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <dt className="text-sm text-gray-600 uppercase">Estimated Tax</dt>
              <dd className="text-sm font-medium text-gray-900">$14.40</dd>
            </div>
            <div className="flex items-center justify-between pt-4">
              <dt className="text-base font-bold text-gray-900 uppercase tracking-widest">Total</dt>
              <dd className="text-base font-bold text-gray-900">$194.40</dd>
            </div>
          </dl>

          <div className="mt-10">
            <Link
              href="/checkout"
              className="w-full bg-black border border-transparent py-4 px-8 flex items-center justify-center text-base font-bold text-white hover:bg-gray-800 transition-colors uppercase tracking-widest"
            >
              Checkout Now
            </Link>
          </div>
          
          <div className="mt-6 text-center">
             <Link href="/" className="text-xs text-gray-500 hover:text-black underline decoration-gray-200 underline-offset-4">
               Continue Shopping
             </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
