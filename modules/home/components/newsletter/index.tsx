import React from "react"

const Newsletter = () => {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs text-gray-400 italic mb-4 uppercase tracking-[0.2em]">Cập nhật tin tức mới nhất từ Manuka Eco</p>
        <h2 className="text-2xl font-black text-gray-900 uppercase mb-12">Đăng ký nhận bản tin</h2>
        
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-0 shadow-xl">
           <input 
             type="email" 
             placeholder="Địa chỉ email của bạn" 
             className="flex-grow border-2 border-gray-800 px-6 py-4 focus:outline-none text-sm placeholder:italic"
           />
           <button 
             type="submit"
             className="bg-[#e85a31] text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#d14d2a] transition-colors whitespace-nowrap"
           >
             Đăng ký
           </button>
        </form>
        
        <p className="mt-8 text-[10px] text-gray-400 italic">
          * Chúng tôi cam kết bảo mật thông tin của bạn và không gửi spam.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
