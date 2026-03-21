import React from "react"
import Link from "next/link"

type ProductBreadcrumbsProps = {
  productName: string
}

const ProductBreadcrumbs = ({ productName }: ProductBreadcrumbsProps) => {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex text-[13px] text-gray-500">
          <Link href="/" className="hover:text-[#e85a31] transition-colors">Trang chủ</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#e85a31] transition-colors">Thực phẩm chức năng</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400 line-clamp-1">{productName}</span>
        </nav>
      </div>
    </div>
  )
}

export default ProductBreadcrumbs
