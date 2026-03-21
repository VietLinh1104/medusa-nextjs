"use client"

import React from "react"
import Link from "next/link"

export default function CheckoutPage() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans pb-20">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center uppercase tracking-[0.2em] text-[11px] font-bold text-gray-400">
          <Link href="/" className="hover:text-[#e85a31] transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại mua sắm
          </Link>
          <span className="hidden sm:inline">Thanh toán an toàn (SSL)</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-5 sm:px-6 lg:px-8 lg:py-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase tracking-tight mb-10">Thanh toán</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-12">

            {/* Shipping Info */}
            <section className="bg-white p-6 sm:p-8 rounded-sm shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 rounded-full bg-[#e85a31] text-white flex items-center justify-center font-bold text-sm">1</div>
                <h2 className="text-[15px] font-bold text-gray-800 uppercase tracking-widest">Thông tin giao hàng</h2>
              </div>

              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                <div className="col-span-2">
                  <label htmlFor="email" className="block text-[11px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Email (Nhận thông báo đơn hàng)</label>
                  <input type="email" className="block w-full border-gray-200 border-b focus:border-[#e85a31] py-3 text-sm outline-none transition-colors bg-transparent placeholder:text-gray-300 placeholder:italic" placeholder="vi-du@email.com" />
                </div>
                <div>
                  <label htmlFor="first-name" className="block text-[11px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Họ</label>
                  <input type="text" className="block w-full border-gray-200 border-b focus:border-[#e85a31] py-3 text-sm outline-none transition-colors bg-transparent" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-[11px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Tên</label>
                  <input type="text" className="block w-full border-gray-200 border-b focus:border-[#e85a31] py-3 text-sm outline-none transition-colors bg-transparent" />
                </div>
                <div className="col-span-2">
                  <label htmlFor="address" className="block text-[11px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Địa chỉ giao hàng</label>
                  <input type="text" className="block w-full border-gray-200 border-b focus:border-[#e85a31] py-3 text-sm outline-none transition-colors bg-transparent" placeholder="Số nhà, tên đường, quận/huyện..." />
                </div>
                <div className="col-span-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#e85a31] focus:ring-[#e85a31]" defaultChecked />
                    <span className="text-[12px] text-gray-500 font-medium">Lưu thông tin cho lần mua sau</span>
                  </label>
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white p-6 sm:p-8 rounded-sm shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 rounded-full bg-[#e85a31] text-white flex items-center justify-center font-bold text-sm">2</div>
                <h2 className="text-[15px] font-bold text-gray-800 uppercase tracking-widest">Phương thức thanh toán</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'cod', name: 'Thanh toán COD', desc: 'Thanh toán khi nhận hàng' },
                  { id: 'bank', name: 'Chuyển khoản', desc: 'Vietcombank / Techcombank' },
                  { id: 'vnpay', name: 'VNPAY / QR', desc: 'Thẻ ATM & QR Pay' },
                  { id: 'card', name: 'Thẻ Quốc tế', desc: 'Visa, Master, JCB' }
                ].map((method) => (
                  <label key={method.id} className="relative border border-gray-100 p-5 rounded-sm flex flex-col gap-1 cursor-pointer hover:border-[#e85a31] transition-all group has-checked:border-[#e85a31] has-checked:bg-orange-50/10">
                    <input type="radio" name="payment" className="absolute top-4 right-4 w-4 h-4 text-[#e85a31] focus:ring-[#e85a31]" defaultChecked={method.id === 'cod'} />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-800">{method.name}</span>
                    <span className="text-[11px] text-gray-400 font-medium">{method.desc}</span>
                  </label>
                ))}
              </div>
            </section>

            <div className="pt-4">
              <button className="w-full bg-[#e85a31] text-white py-5 font-bold uppercase tracking-[0.25em] text-sm hover:bg-[#d14d2a] transition-all rounded-sm shadow-lg transform active:scale-[0.98]">
                Hoàn tất đặt hàng
              </button>
              <p className="text-[10px] text-gray-400 text-center mt-6 uppercase tracking-wider leading-relaxed">
                Bằng cách đặt hàng, bạn đồng ý với các <Link href="/terms" className="underline hover:text-[#e85a31]">Điều khoản & Điều kiện</Link> của chúng tôi.
              </p>
            </div>
          </div>

          {/* Right Column: Mini Summary */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm sticky top-24">
              <h2 className="text-[15px] font-bold text-gray-800 uppercase tracking-widest mb-8 pb-4 border-b border-gray-50">Tóm tắt đơn hàng</h2>
              <ul className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {[1, 2].map((i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="h-20 w-20 bg-white border border-gray-50 flex-shrink-0 flex items-center justify-center p-2 rounded-sm overflow-hidden">
                      <img
                        src={`https://placehold.co/100x100/ffffff/dddddd?text=PRODUCT+${i}`}
                        className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        alt="Product"
                      />
                    </div>
                    <div className="flex flex-col justify-between grow py-1">
                      <div className="space-y-1">
                        <p className="text-[12px] font-bold uppercase text-gray-800 leading-snug line-clamp-2">Mật ong Manuka Eco MGO 100+ - Tăng cường miễn dịch</p>
                        <p className="text-[11px] text-gray-400 font-medium">Số lượng: 1</p>
                      </div>
                      <p className="text-[13px] font-bold text-[#e85a31]">428,000₫</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
                <div className="flex justify-between text-[13px] font-medium text-gray-400 uppercase tracking-wider">
                  <span>Tạm tính</span>
                  <span>856,000₫</span>
                </div>
                <div className="flex justify-between text-[13px] font-medium text-gray-400 uppercase tracking-wider">
                  <span>Phí vận chuyển</span>
                  <span className="text-green-500 font-bold">Miễn phí</span>
                </div>
                <div className="flex justify-between text-gray-800 font-bold text-xl pt-6 border-t border-gray-50 mt-4 uppercase tracking-widest">
                  <span className="text-sm self-center text-gray-400 font-medium">Tổng số tiền</span>
                  <span>856,000₫</span>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-sm flex gap-3 items-center">
                <div className="text-[#e85a31]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">Cam kết sản phẩm mật ong Manuka chính hãng 100%</p>
              </div>
            </div>
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
    </div>
  )
}
