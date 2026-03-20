import React from "react"

const Features = () => {
  const features = [
    { title: "Nguồn gốc rõ ràng", desc: "100% mật ong Manuka nguyên chất nhập khẩu từ Úc." },
    { title: "Chất lượng kiểm định", desc: "Được chứng nhận bởi các cơ quan hàng đầu thế giới." },
    { title: "Kháng khuẩn vượt trội", desc: "Hàm lượng MGO cao đặc trị các bệnh về tiêu hóa." },
    { title: "Uy tín lâu năm", desc: "Hàng triệu khách hàng tin dùng trên toàn thế giới." }
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#e85a31] text-[17px] font-medium ">Vì sao chọn chúng tôi</p>
          <h2 className="text-[34px] font-bold text-gray-500 uppercase">Chọn Mật Ong Manuka</h2>
          <div className="w-8 h-1 bg-[#e85a31] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 border-2 border-dashed border-[#d4b068] group-hover:border-[#e85a31] rounded-full mx-auto flex items-center justify-center mb-6 transition-colors">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#d4b068] group-hover:text-[#e85a31]">
                  {/* Placeholder Icon */}
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[16px] font-bold text-gray-900 mb-3 px-4">{feature.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed px-6">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
