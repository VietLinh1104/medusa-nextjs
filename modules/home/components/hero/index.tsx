import React from "react"
import Link from "next/link"

const Hero = () => {
  const benefits = [
    "100% chính hãng nhập khẩu từ Úc.",
    "Không chứa chất bảo quản, phụ gia.",
    "Hàm lượng MGO đạt chuẩn từ thấp đến cao.",
    "Được kiểm định - Chỉ số kháng khuẩn vượt trội."
  ]

  return (
    <div className="relative min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6 text-[#d4b068]">
             <div className="w-8 h-8 border border-[#d4b068] rounded-full flex items-center justify-center p-1">
                <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
                   <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
             </div>
             <span className="text-sm font-bold uppercase tracking-widest">Manuka Eco</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl uppercase leading-tight">
            Mật Ong Manuka <br />
            <span className="text-[#d4b068]">Tinh chất vàng từ thiên nhiên</span>
          </h1>
          
          <p className="mt-4 text-lg text-gray-300 font-medium">Đặc trị ho, đau dạ dày - Tốt cho sức khỏe</p>

          <ul className="mt-10 space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-white text-sm font-medium">
                <div className="w-5 h-5 bg-[#d4b068] rounded-full flex items-center justify-center mr-3 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex gap-4">
            <Link href="/products" className="inline-block bg-[#e85a31] text-white px-10 py-4 font-bold hover:bg-[#d14d2a] transition-colors uppercase tracking-widest text-sm shadow-xl shadow-black/20">
              Mua hàng ngay
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Product Image Placeholder (Right side) */}
      <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2">
         <div className="flex -space-x-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-40 h-56 bg-white border-2 border-[#d4b068] p-2 shadow-2xl transform ${i === 2 ? "-translate-y-8 scale-110 z-10" : "rotate-3"}`}>
                 <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 text-[10px] font-bold uppercase">Jar {i}</div>
              </div>
            ))}
         </div>
      </div>
    </div>
  )
}

export default Hero
