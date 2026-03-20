import React from "react"
import Image from "next/image"

const ProductCheck = () => {
    const benefits = [
        {
            title: "100% NHẬP KHẨU TỪ ÚC",
            description: "100% nhập khẩu chính hãng và được thu thập từ mật và phấn hoa của rừng hoa Manuka tại Úc. Sản phẩm đã được kiểm nghiệm nghiêm ngặt bởi CE Marking, bảo vệ an toàn sức khỏe cho người tiêu dùng."
        },
        {
            title: "BẢO VỆ TOÀN DIỆN",
            description: "Tính kháng khuẩn sinh học cao nên có thể sử dụng trực tiếp, không pha loãng, bảo vệ cơ thể trước sự tấn công của vi khuẩn và cải thiện hệ tiêu hóa toàn diện."
        },
        {
            title: "NĂNG LƯỢNG TUYỆT ĐỐI",
            description: "Sử dụng hàng ngày để cải thiện sức khỏe, cung cấp nguồn năng lượng tuyệt vời cho cơ thể."
        }
    ]

    return (
        <section className="bg-[#F6F6F6] py-12 sm:py-20 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                    {/* Left: Product Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 flex justify-center">
                            <Image
                                src="/assets/home_introduce_img.png"
                                alt="Manuka Honey Jars"
                                width={600}
                                height={600}
                                className="w-full h-auto max-w-[320px] sm:max-w-[500px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="text-center lg:text-left mb-8 sm:mb-10">
                            <p className="text-gray-400 font-bold text-[11px] sm:text-[13px] tracking-[0.2em] mb-2 uppercase">
                                CHI TIẾT VÀ ĐÓNG GÓI
                            </p>
                            <h2 className="text-2xl sm:text-[34px] font-bold text-gray-800 mb-4 leading-tight uppercase">
                                Mật ong Manuka
                            </h2>
                            <div className="flex justify-center lg:justify-start items-center gap-2">
                                <div className="h-[2px] w-12 bg-gray-200"></div>
                                <div className="w-2 h-2 bg-[#e85a31] rotate-45"></div>
                                <div className="h-[2px] w-12 bg-gray-200"></div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className="mt-1 shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-[#3ecf8e] flex items-center justify-center text-white shadow-lg shadow-[#3ecf8e]/20 group-hover:scale-110 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-gray-800 uppercase mb-1 tracking-wide">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCheck
