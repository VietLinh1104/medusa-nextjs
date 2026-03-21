"use client"

import React, { useState } from "react"
import Link from "next/link"
import ProductBreadcrumbs from "@/modules/products/components/product-breadcrumbs"

const CartItem = ({ id, name, price, mgo }: { id: string, name: string, price: string, mgo: string }) => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex flex-col sm:flex-row py-8 border-b border-gray-100 last:border-0 group">
      <div className="h-32 w-32 flex-shrink-0 bg-white border border-gray-100 rounded-sm flex items-center justify-center p-4 relative overflow-hidden">
        <img 
          src={`https://placehold.co/200x200/ffffff/dddddd?text=MGO+${mgo}`} 
          alt={name}
          className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-orange-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-tighter shadow-sm">
           MGO {mgo}
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-8 flex flex-1 flex-col justify-between">
        <div className="space-y-1">
          <div className="flex justify-between items-start">
            <h3 className="text-[15px] font-bold uppercase tracking-tight text-gray-800 leading-snug max-w-md">
              <Link href={`/products/${id}`} className="hover:text-[#e85a31] transition-colors">{name}</Link>
            </h3>
            <p className="text-[16px] font-bold text-[#e85a31]">{price}</p>
          </div>
          <p className="text-[11px] text-gray-400 font-medium uppercase tracking-widest">Sản phẩm chính hãng từ Úc</p>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center border border-gray-200 rounded-sm bg-white overflow-hidden shadow-sm">
             <button 
               onClick={() => setQuantity(Math.max(1, quantity - 1))}
               className="px-4 py-2 hover:bg-gray-50 text-gray-400 transition-colors border-r border-gray-100 font-bold"
             >-</button>
             <span className="px-6 py-2 text-xs font-bold text-gray-800 bg-white">{quantity}</span>
             <button 
               onClick={() => setQuantity(quantity + 1)}
               className="px-4 py-2 hover:bg-gray-50 text-gray-400 transition-colors border-l border-gray-100 font-bold"
             >+</button>
          </div>
          
          <button type="button" className="text-[11px] font-bold text-gray-300 hover:text-red-500 uppercase tracking-widest transition-all flex items-center gap-1.5 group/del">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-40 group-hover/del:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Xóa sản phẩm
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CartPage() {
  const cartItems = [
    { id: "1", name: "Mật ong Manuka Eco MGO 100+ - Nhập khẩu chính hãng từ Australia (250g)", price: "428,000₫", mgo: "100+" },
    { id: "2", name: "Mật ong Manuka Premium MGO 550+ - Hỗ trợ kháng viêm, đề kháng cao", price: "895,000₫", mgo: "550+" },
  ]

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans pb-20">
      <ProductBreadcrumbs productName="Giỏ hàng" />
      
      <div className="max-w-[1440px] mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 mb-12">
           <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase tracking-tight">Giỏ hàng của bạn</h1>
           <span className="text-sm text-gray-400 font-medium">({cartItems.length} sản phẩm)</span>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
          {/* Main List */}
          <section className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-sm shadow-sm border border-gray-100">
            <div className="space-y-2">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          </section>

          {/* Checkout Summary */}
          <section className="mt-12 lg:col-span-4 lg:mt-0 sticky top-24">
            <div className="bg-white px-6 py-8 sm:p-8 rounded-sm shadow-sm border border-gray-100 space-y-8">
              <h2 className="text-[15px] font-bold text-gray-800 uppercase tracking-widest border-b border-gray-50 pb-4">Tóm tắt đơn hàng</h2>

              <dl className="space-y-6">
                <div className="flex items-center justify-between text-[13px] font-medium text-gray-400 uppercase tracking-wider">
                  <dt>Tạm tính</dt>
                  <dd className="text-gray-600 font-bold">1,323,000₫</dd>
                </div>
                <div className="flex items-center justify-between text-[13px] font-medium text-gray-400 uppercase tracking-wider">
                  <dt>Phí giao hàng</dt>
                  <dd className="text-green-500 font-bold">Miễn phí</dd>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <dt className="text-sm font-medium text-gray-400 uppercase tracking-widest self-center">Tổng tiền</dt>
                  <dd className="text-2xl font-bold text-[#e85a31] tracking-tight">1,323,000₫</dd>
                </div>
              </dl>

              <div className="space-y-4">
                <Link
                  href="/checkout"
                  className="w-full bg-[#e85a31] py-5 flex items-center justify-center text-[12px] font-bold text-white hover:bg-[#d14d2a] transition-all uppercase tracking-[0.25em] rounded-sm shadow-lg shadow-orange-100"
                >
                  Tiến hành thanh toán
                </Link>
                <div className="text-center">
                   <Link href="/" className="text-[11px] font-bold text-gray-300 hover:text-gray-500 uppercase tracking-[0.2em] transition-all">
                     Tiếp tục mua sắm
                   </Link>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-50">
                 <div className="flex items-center gap-3 text-gray-400 opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="text-[10px] uppercase font-bold tracking-widest">Thanh toán an toàn bảo mật 100%</p>
                 </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
