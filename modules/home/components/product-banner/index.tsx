import React from "react"
import Link from "next/link"

const ProductBanner = ({ title, showButton = true }: { title: string, showButton?: boolean }) => {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
         <p className="text-gray-400 text-xs italic mb-2 tracking-widest uppercase">Thương hiệu mật ong hàng đầu từ Úc</p>
         <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">
           {title}
         </h2>
         <div className="w-8 h-1 bg-[#e85a31] mb-8"></div>
         {showButton && (
           <Link href="/products" className="inline-block bg-[#e85a31] text-white px-10 py-3 font-bold hover:bg-[#d14d2a] transition-colors uppercase tracking-widest text-xs">
              MUA NGAY BÂY GIỜ
           </Link>
         )}
      </div>
    </section>
  )
}

export default ProductBanner
