import React from "react"
import InfoCard from "@/components/info-card"

const InfoSections = () => {
  return (
    <div className="bg-white">
      {/* Section 1: Image Left, Text Right */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col gap-10">
        <InfoCard
          image="https://placehold.co/800x600/f3f4f6/9ca3af?text=Honey+Forest+Story"
          title="Kháng khuẩn cực mạnh Mật ong Manuka Gold 850+"
          description="Được thu hoạch từ những cánh rừng Manuka nguyên sinh tại Úc, sản phẩm mang trong mình hàm lượng MGO cực cao, giúp kháng khuẩn, chống viêm và tăng cường hệ miễn dịch vượt trội. Một món quà vô giá mà thiên nhiên ban tặng cho sức khỏe con người."
          href="/products"
          imgAlt="Story 1"
          btnContent="Tìm hiểu thêm"
          reverse={false}
        />
        <InfoCard
          image="https://placehold.co/800x600/f3f4f6/9ca3af?text=Honey+Forest+Story"
          title="Kháng khuẩn cực mạnh Mật ong Manuka Gold 850+"
          description="Được thu hoạch từ những cánh rừng Manuka nguyên sinh tại Úc, sản phẩm mang trong mình hàm lượng MGO cực cao, giúp kháng khuẩn, chống viêm và tăng cường hệ miễn dịch vượt trội. Một món quà vô giá mà thiên nhiên ban tặng cho sức khỏe con người."
          href="/products"
          imgAlt="Story 1"
          btnContent="Tìm hiểu thêm"
          reverse={true}
        />
      </section>



    </div>
  )
}

export default InfoSections
