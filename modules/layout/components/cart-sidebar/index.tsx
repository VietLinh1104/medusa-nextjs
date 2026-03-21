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
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-110 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white shadow-2xl z-111 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col font-sans`}
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] text-gray-800">Giỏ hàng của bạn</h2>
          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-[#e85a31] transition-all p-2 hover:bg-white rounded-full shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Contents */}
        <div className="grow overflow-y-auto p-6 space-y-6 custom-scrollbar">
           {[1, 2].map((i) => (
             <div key={i} className="flex gap-4 group">
                <div className="w-24 h-24 bg-white border border-gray-100 p-2 rounded-sm shrink-0 flex items-center justify-center relative overflow-hidden">
                   <img 
                     src={`https://placehold.co/100x100/ffffff/dddddd?text=PRODUCT+${i}`} 
                     alt={`Product ${i}`}
                     className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
                <div className="flex flex-col justify-between grow py-1">
                   <div className="space-y-1">
                      <h3 className="text-[13px] font-bold uppercase text-gray-800 tracking-tight line-clamp-2 leading-snug">Mật ong Manuka Eco MGO 100+ - Tăng cường miễn dịch</h3>
                      <p className="text-[11px] text-gray-400 font-medium">Số lượng: 1</p>
                   </div>
                   <div className="flex justify-between items-end">
                      <p className="text-[14px] font-bold text-[#e85a31]">428,000₫</p>
                      <button className="text-[10px] text-gray-400 hover:text-red-500 uppercase font-bold tracking-widest border-b border-transparent hover:border-red-200 transition-all">Xóa</button>
                   </div>
                </div>
             </div>
           ))}
           
           <div className="pt-10 text-center space-y-4">
              <p className="text-xs text-gray-400 font-medium italic">Thêm sản phẩm để nhận ưu đãi miễn phí vận chuyển!</p>
           </div>
        </div>

        {/* Footer */}
        <div className="p-8 bg-white border-t border-gray-100 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
           <div className="flex justify-between items-center uppercase tracking-[0.15em] text-[13px] font-bold text-gray-800 mb-8">
              <span className="text-gray-400 font-medium">Tổng cộng:</span>
              <span className="text-xl text-[#e85a31]">856,000₫</span>
           </div>
           
           <div className="space-y-3">
              <Link
                href="/checkout"
                onClick={closeCart}
                className="block w-full text-center bg-[#e85a31] text-white py-4 font-bold uppercase tracking-[0.2em] text-[12px] hover:bg-[#d14d2a] transition-all rounded-sm shadow-md"
              >
                Tiến hành đặt hàng
              </Link>
              <Link
                href="/cart"
                onClick={closeCart}
                className="block w-full text-center bg-gray-50 text-gray-500 py-4 font-bold uppercase tracking-[0.2em] text-[12px] hover:bg-gray-100 transition-all border border-gray-100 rounded-sm"
              >
                Xem chi tiết giỏ hàng
              </Link>
           </div>
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
          background: #e85a31;
        }
      `}</style>
    </>
  )
}

export default CartSidebar
