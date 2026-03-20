import React from "react"
import Image from "next/image"

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
      <section className="bg-[#0F3810] py-14 relative overflow-hidden">
         {/* Decorative circles */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-5">
               <p className="text-[#d4b068] font-semibold text-sm uppercase tracking-[0.3em] mb-1">Sản phẩm vàng</p>
               <h2 className="text-[34px] font-bold text-white uppercase">Thành phần mật ong Manuka</h2>
               <div className="w-8 h-1 bg-[#d4b068] mx-auto mt-4"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10">
               {/* Left Features */}
               <div className="space-y-12 text-center lg:text-right w-full lg:w-1/3 order-2 lg:order-1">
                  {leftFeatures.map((f, i) => (
                     <div key={i} className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-end gap-4 group">
                        <div>
                           <h4 className="text-white text-[16px] font-bold group-hover:text-[#d4b068] transition-colors">{f}</h4>
                           <p className="text-white/60 text-[14px] mt-1">Chứa hàm lượng methylglyoxal tự nhiên cao dựa trên các chỉ số MGO.</p>
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
                     <Image
                        src="/assets/home_info_img_center.png"
                        alt="Product Jar"
                        width={376}
                        height={376}
                        className="w-full h-full object-cover"
                     />
                  </div>
               </div>

               {/* Right Features */}
               <div className="space-y-12 text-center lg:text-left w-full lg:w-1/3 order-3">
                  {rightFeatures.map((f, i) => (
                     <div key={i} className="flex flex-col lg:flex-row-reverse items-center lg:items-center justify-center lg:justify-end gap-4 group">
                        <div className="lg:text-left">
                           <h4 className="text-white text-[16px] font-bold group-hover:text-[#d4b068] transition-colors">{f}</h4>
                           <p className="text-white/60 text-[14px] mt-1">Chứa hàm lượng methylglyoxal tự nhiên cao dựa trên các chỉ số MGO.</p>
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
