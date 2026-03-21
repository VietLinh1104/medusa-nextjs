"use client"

import React, { useState } from "react"
import ProductBreadcrumbs from "@/modules/products/components/product-breadcrumbs"
import ProductCard from "@/components/product-card"
import FilterSidebar from "@/modules/products/components/filter-sidebar"

const ProductsListPage = () => {
  const [sortBy, setSortBy] = useState("Mới nhất")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const products = [
    { 
      id: "p1", 
      name: "Quà Tặng Mật Ong Manuka Nguyên Chất Nhập Khẩu Úc, Sự Quan Tâm...", 
      price: "1,174,800₫",
      mgoBadge: "Gift"
    },
    { 
      id: "p2", 
      name: "Mật Ong Manuka Eco MGO 100+ – Tăng Cường Miễn Dịch, Dùng Hàng...", 
      price: "428,000₫",
      mgoBadge: "100+"
    },
    { 
      id: "p3", 
      name: "Mật ong Manuka Eco MGO 900 + – Kháng Khuẩn Cực Mạnh, Quà Tặng...", 
      price: "1,695,000₫",
      mgoBadge: "900+"
    },
    { 
      id: "p4", 
      name: "Mật Ong Manuka Eco MGO 550+ – Hỗ Trợ Kháng Viêm, Đề Kháng Cao | Nh...", 
      price: "895,000₫",
      mgoBadge: "550+"
    },
    { 
      id: "v5", 
      name: "Mật ong Manuka MGO 265 + Dịu Họng, Dịu Viêm Dạ Dày Đại Tràng -...", 
      price: "585,000₫",
      mgoBadge: "265+"
    },
    { 
      id: "v6", 
      name: "Mật ong Manuka Eco MGO 30 + Sử dụng hàng ngày - Nhập Khẩu Úc", 
      price: "268,000₫",
      isSoldOut: true,
      mgoBadge: "30+"
    },
  ]

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans pb-20">
      <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      <ProductBreadcrumbs productName="Tất cả sản phẩm" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 sm:gap-0">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">Tất cả sản phẩm</h1>
            <span className="text-sm text-gray-400 font-medium">{products.length} sản phẩm</span>
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-sm text-[13px] font-bold text-gray-700 hover:border-[#e85a31] hover:text-[#e85a31] transition-all"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4.5h18M5.25 9h13.5m-11.25 4.5h9m-6.75 4.5h4.5" />
               </svg>
               Bộ lọc
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Sắp xếp theo</span>
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 px-6 py-2.5 pr-10 rounded-sm text-sm font-medium focus:outline-none focus:border-[#e85a31] cursor-pointer"
              >
                <option>Mới nhất</option>
                <option>Giá: Thấp đến Cao</option>
                <option>Giá: Cao đến Thấp</option>
                <option>Tên: A-Z</option>
                <option>Tên: Z-A</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-[#e85a31] transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                 </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsListPage
