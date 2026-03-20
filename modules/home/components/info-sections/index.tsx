import React from "react"
import Link from "next/link"

const InfoSections = () => {
  return (
    <div className="bg-white">
      {/* Section 1: Image Left, Text Right */}
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
             <div className="relative group overflow-hidden">
                <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest border border-gray-100">
                   Image Story 1
                </div>
                <div className="absolute inset-0 border-8 border-white group-hover:scale-95 transition-transform duration-500"></div>
             </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-black text-gray-900 uppercase mb-6 leading-tight">
              Kháng khuẩn cực mạnh <br />
              <span className="text-[#e85a31]">Mật ong Manuka Gold 850+</span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
               Được thu hoạch từ những cánh rừng Manuka nguyên sinh tại Úc, sản phẩm mang trong mình hàm lượng MGO cực cao, giúp kháng khuẩn, chống viêm và tăng cường hệ miễn dịch vượt trội. Một món quà vô giá mà thiên nhiên ban tặng cho sức khỏe con người.
            </p>
            <Link href="/products" className="inline-block bg-[#e85a31] text-white px-8 py-3 font-bold hover:bg-[#d14d2a] transition-colors uppercase tracking-widest text-xs">
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Text Left, Image Right */}
      <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-2xl font-black text-gray-900 uppercase mb-6 leading-tight">
              Lợi nhuận MGO 850+ không phải <br />
              <span className="text-[#e85a31]">là thứ hiếm đối với bạn</span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Chúng tôi cam kết mang lại giá trị thực cho người tiêu dùng. Với quy trình kiểm tra nghiêm ngặt, mỗi giọt mật ong đến tay bạn đều đạt chuẩn chất lượng cao nhất. Sức khỏe của bạn là niềm tự hào của chúng tôi.
            </p>
            <Link href="/products" className="inline-block bg-[#e85a31] text-white px-8 py-3 font-bold hover:bg-[#d14d2a] transition-colors uppercase tracking-widest text-xs">
              Xem báo cáo kiểm định
            </Link>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group overflow-hidden">
                <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest border border-gray-200">
                   Image Story 2
                </div>
                <div className="absolute inset-0 border-8 border-gray-50 group-hover:scale-95 transition-transform duration-500"></div>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InfoSections
