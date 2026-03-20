import React from "react"

const Newsletter = () => {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="text-center mb-10">
          {/* HEADER */}
          <p className="text-[#e85a31] text-[17px] font-medium ">Cập nhật tin tức mới nhất từ Manuka Eco</p>
          <h2 className="text-[34px] font-bold text-gray-500 uppercase">Đăng ký nhận bản tin</h2>
          <div className="w-8 h-1 bg-[#e85a31] mx-auto my-4"></div>
        </div>

        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-0 ">
          <input
            type="email"
            placeholder="Địa chỉ email của bạn"
            className="grow border border-gray-200 px-6 py-4 focus:outline-none text-sm placeholder:italic"
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
