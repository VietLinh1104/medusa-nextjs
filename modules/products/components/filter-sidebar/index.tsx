"use client"

import React from "react"

const FilterSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-110 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-[320px] bg-white shadow-2xl z-111 transition-transform duration-500 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } flex flex-col font-sans`}
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-[16px] font-bold uppercase tracking-widest text-gray-800">Bộ lọc sản phẩm</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#e85a31] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grow overflow-y-auto p-6 space-y-8">
          {/* Category Filter */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-800 uppercase border-l-4 border-[#e85a31] pl-3">Danh mục</h3>
            <div className="space-y-2">
              {["Mật ong Manuka Premium", "Combo Quà tặng", "Chăm sóc sức khỏe", "Sản phẩm MGO"].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#e85a31] focus:ring-[#e85a31]" />
                  <span className="text-base text-gray-600 group-hover:text-gray-900 transition-colors uppercase font-medium">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* MGO Level */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-800 uppercase border-l-4 border-[#e85a31] pl-3">MGO Level</h3>
            <div className="grid grid-cols-2 gap-2">
              {["MGO 30+", "MGO 100+", "MGO 265+", "MGO 550+", "MGO 850+", "MGO 900+"].map((mgo) => (
                <button key={mgo} className="px-3 py-2 border border-gray-100 bg-gray-50 text-base font-bold text-gray-500 hover:border-[#e85a31] hover:text-[#e85a31] rounded-sm transition-all uppercase">
                  {mgo}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-800 uppercase border-l-4 border-[#e85a31] pl-3">Giá sản phẩm</h3>
            <div className="space-y-2">
              {[
                "Dưới 500,000₫",
                "500,000₫ - 1,000,000₫",
                "1,000,000₫ - 2,000,000₫",
                "Trên 2,000,000₫"
              ].map((range) => (
                <label key={range} className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="price" className="w-4 h-4 text-[#e85a31] focus:ring-[#e85a31]" />
                  <span className="text-base text-gray-600 group-hover:text-gray-900 transition-colors uppercase font-medium">{range}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-4">
          <button className="flex-1 py-3 text-base font-bold uppercase tracking-widest text-gray-400 hover:text-gray-600">Xóa hết</button>
          <button
            onClick={onClose}
            className="flex-2 py-3 bg-[#e85a31] text-white text-base font-bold uppercase tracking-widest hover:bg-[#d14d2a] transition-all rounded-sm shadow-md"
          >
            Áp dụng
          </button>
        </div>
      </div>
    </>
  )
}

export default FilterSidebar
