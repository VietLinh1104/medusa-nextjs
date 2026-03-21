"use client"

import React, { useState } from "react"

type ProductTabsProps = {
  description: string
  details: { label: string; value: string }[]
}

const ProductTabs = ({ description, details }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className=" bg-white rounded-sm shadow-sm">
      <div className="flex border-b border-gray-100 overflow-x-auto scrollbar-hide">
        {["description", "policy", "terms", "faq"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-xs sm:text-sm font-bold uppercase transition-all duration-300 border-b-2 whitespace-nowrap min-w-fit ${activeTab === tab ? 'border-[#e85a31] text-[#e85a31]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            {tab === "description" && "Mô tả sản phẩm"}
            {tab === "policy" && "Chính sách đổi trả"}
            {tab === "terms" && "Điều khoản dịch vụ"}
            {tab === "faq" && "Câu hỏi thường gặp"}
          </button>
        ))}
      </div>
      <div className="p-8">
        {activeTab === "description" && (
          <div className="space-y-6">
            <p className="text-[16px] font-bold text-gray-800">{description}</p>
            <div className="space-y-2">
              {details.map((detail, i) => (
                <p key={i} className="text-[14px]">
                  <span className="font-bold">{detail.label}:</span> {detail.value}
                </p>
              ))}
            </div>
            <div className="pt-4 text-center">
              <button className="px-6 py-2 border border-gray-200 rounded-sm text-[13px] text-gray-600 hover:bg-gray-50">
                Xem thêm <span className="ml-1">↓</span>
              </button>
            </div>
          </div>
        )}
        {activeTab !== "description" && (
          <p className="text-gray-500 text-sm">Nội dung đang được cập nhật...</p>
        )}
      </div>
    </div>
  )
}

export default ProductTabs
