"use client"

import React, { use } from "react"
import Link from "next/link"
import ProductImageGallery from "@/modules/products/components/product-image-gallery"
import ProductInfo from "@/modules/products/components/product-info"
import ProductTabs from "@/modules/products/components/product-tabs"
import RelatedProducts from "@/modules/products/components/related-products"
import ViewedProducts from "@/modules/products/components/viewed-products"
import ProductBreadcrumbs from "@/modules/products/components/product-breadcrumbs"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const product = {
    id: id,
    name: "Mật ong Manuka Eco MGO 30 + Sử dụng hàng ngày - Nhập Khẩu Úc",
    sku: "MG030250G",
    status: "Hết hàng",
    brand: "Manuka Eco",
    price: "268,000₫",
    images: [
      "/placeholder-main.png",
      "/placeholder-1.png",
      "/placeholder-2.png",
      "/placeholder-3.png",
      "/placeholder-4.png",
    ],
    description: "Mật ong Manuka Eco MGO 30 + Sử dụng hàng ngày để cải thiện sức khỏe - Nhập khẩu chính hãng từ Australia",
    details: [
      { label: "Hũ (chai)", value: "Nhựa" },
      { label: "Hãng sản xuất", value: "Manuka Eco" },
      { label: "Xuất xứ", value: "100% Nhập khẩu chính hãng từ Australia" },
    ]
  }

  const relatedProducts = [
    { id: "rp1", name: "Mật Ong Manuka Eco MGO 100+ – Tăng Cường Miễn...", price: "428,000₫" },
    { id: "rp2", name: "Mật Ong Manuka Eco MGO 550+ – Hỗ Trợ Kháng Viê...", price: "895,000₫" },
  ]

  const viewedProducts = [
    { id: "v1", name: "Mật ong Manuka Eco MGO 30 + Sử dụng hàng ngày ...", price: "268,000₫", isSoldOut: true },
    { id: "v2", name: "Quà Tặng Mật Ong Manuka Nguyên Chất Nhập Khẩu...", price: "1,174,800₫" },
    { id: "v3", name: "Mật Ong Manuka Eco MGO 100+ – Tăng Cường Miễn...", price: "428,000₫" },
    { id: "v4", name: "Mật Ong Manuka Eco MGO 550+ – Hỗ Trợ Kháng Viê...", price: "895,000₫" },
  ]

  return (
    <div className="bg-[#f9f9f9] min-h-screen font-roboto">
      <ProductBreadcrumbs productName={product.name} />

      <div className="max-w-[1440px] w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* MAIN CONTENT AREA */}
          <div className="grow w-full">
            <div className="bg-white p-6 rounded-sm shadow-sm flex flex-col md:flex-row gap-8">
              <ProductImageGallery images={product.images} name={product.name} mgoBadge="30+" />
              <ProductInfo {...product} />
            </div>

            <div className="grid grid-cols-7 gap-4 mt-8">
              <div className="col-span-5">
                <ProductTabs description={product.description} details={product.details} />
                <ViewedProducts products={viewedProducts} />
              </div>
              <div className="col-span-2">
                <RelatedProducts products={relatedProducts} />
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
        </div>
      </div>
    </div>
  )
}
