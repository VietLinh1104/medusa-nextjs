import React from "react"

const ProductHighlight = () => {
  const leftFeatures = [
    "Hàm lượng MGO 850+",
    "100% Nguyên chất",
    "Kháng khuẩn vượt trội"
  ]
  
  const rightFeatures = [
    "Nhập khẩu trực tiếp",
    "Chứng nhận quốc tế",
    "Nâng cao sức đề kháng"
  ]

  return (
    <section className="bg-[#004225] py-24 relative overflow-hidden">
       {/* Decorative circles */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <p className="text-[#d4b068] font-bold text-xs uppercase tracking-[0.3em] mb-4">Sản phẩm vàng</p>
             <h2 className="text-3xl font-black text-white uppercase">Thành phần mật ong Manuka</h2>
             <div className="w-8 h-1 bg-[#d4b068] mx-auto mt-4"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
             {/* Left Features */}
             <div className="space-y-12 text-center lg:text-right w-full lg:w-1/3 order-2 lg:order-1">
                {leftFeatures.map((f, i) => (
                  <div key={i} className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-end gap-4 group">
                     <div>
                        <h4 className="text-white text-sm font-bold uppercase group-hover:text-[#d4b068] transition-colors">{f}</h4>
                        <p className="text-white/60 text-[10px] mt-1">Cải thiện hệ tiêu hóa và hô hấp hiệu quả.</p>
                     </div>
                     <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20 group-hover:border-[#d4b068] transition-colors">
                        <div className="w-5 h-5 bg-[#d4b068] rounded-full"></div>
                     </div>
                  </div>
                ))}
             </div>

             {/* Center Image */}
             <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
                <div className="relative">
                   <div className="absolute inset-0 bg-[#d4b068]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                   <div className="bg-white p-4 shadow-2xl transform lg:scale-110">
                      <div className="w-48 h-64 bg-gray-100 flex items-center justify-center text-gray-400 font-bold uppercase text-xs">Product Jar</div>
                   </div>
                </div>
             </div>

             {/* Right Features */}
             <div className="space-y-12 text-center lg:text-left w-full lg:w-1/3 order-3">
                {rightFeatures.map((f, i) => (
                   <div key={i} className="flex flex-col lg:flex-row-reverse items-center lg:items-center justify-center lg:justify-end gap-4 group">
                      <div className="lg:text-left">
                         <h4 className="text-white text-sm font-bold uppercase group-hover:text-[#d4b068] transition-colors">{f}</h4>
                         <p className="text-white/60 text-[10px] mt-1">Sản phẩm đạt chuẩn organic quốc tế.</p>
                      </div>
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20 group-hover:border-[#d4b068] transition-colors">
                         <div className="w-5 h-5 bg-[#d4b068] rounded-full"></div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  )
}

export default ProductHighlight
