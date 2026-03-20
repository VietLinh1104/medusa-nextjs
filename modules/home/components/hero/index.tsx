"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=2070&auto=format&fit=crop",
    title: "Mật Ong Manuka",
    subtitle: "Tinh chất vàng từ thiên nhiên",
    desc: "Đặc trị ho, đau dạ dày - Tốt cho sức khỏe",
    benefits: [
      "100% chính hãng nhập khẩu từ Úc.",
      "Không chứa chất bảo quản, phụ gia.",
      "Hàm lượng MGO đạt chuẩn từ thấp đến cao.",
      "Được kiểm định - Chỉ số kháng khuẩn vượt trội."
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=2070&auto=format&fit=crop",
    title: "Sức Khỏe Từ Thiên Nhiên",
    subtitle: "Hàm lượng MGO lên đến 850+",
    desc: "Món quà tuyệt vời cho hệ miễn dịch",
    benefits: [
      "Kháng khuẩn vượt trội.",
      "Tăng cường sức đề kháng.",
      "Hỗ trợ hệ tiêu hóa khỏe mạnh.",
      "Chứng nhận quốc tế."
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1558239027-3806e309cc48?q=80&w=2070&auto=format&fit=crop",
    title: "Manuka Eco Việt Nam",
    subtitle: "Thương hiệu mật ong hàng đầu",
    desc: "Hành trình mang tinh túy Úc về Việt Nam",
    benefits: [
      "Nhập khẩu trực tiếp.",
      "Chất lượng vàng.",
      "Phân phối độc quyền.",
      "Dịch vụ tận tâm."
    ]
  }
]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[450px] sm:h-[600px] lg:h-[705px] overflow-hidden group">
      {/* Slides Container */}
      <div
        className="h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative flex items-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-scale duration-10000"
              style={{
                backgroundImage: `url('${slide.image}')`,
                opacity: 0.5,
                transform: current === index ? 'scale(1.1)' : 'scale(1)'
              }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 w-full z-10">
              <div className="max-w-2xl">
                <div className="flex items-center space-x-2 mb-4 sm:mb-6 text-[#d4b068]">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 border border-[#d4b068] rounded-full flex items-center justify-center p-1">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
                      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">Manuka Eco</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight animate-fade-in-up">
                  {slide.title} <br />
                  <span className="text-[#d4b068]">{slide.subtitle}</span>
                </h1>

                <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-300 font-medium line-clamp-2 sm:line-clamp-none">{slide.desc}</p>

                <ul className="mt-6 sm:mt-10 space-y-2 sm:space-y-4">
                  {slide.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-center text-white text-xs sm:text-sm font-medium">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#d4b068] rounded-full flex items-center justify-center mr-2 sm:mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 sm:mt-12">
                  <Link href="/products" className="inline-block bg-[#e85a31] text-white px-8 sm:px-10 py-3 sm:py-4 font-bold hover:bg-[#d14d2a] transition-colors uppercase tracking-widest text-xs sm:text-sm shadow-xl shadow-black/20">
                    Mua hàng ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Hidden on Mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 hidden sm:flex items-center justify-center bg-white hover:bg-[#e85a31] rounded-sm shadow-lg text-[#e85a31] hover:text-white sm:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 hidden sm:flex items-center justify-center bg-white hover:bg-[#e85a31] rounded-sm shadow-lg text-[#e85a31] hover:text-white sm:opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${current === i ? "bg-[#e85a31] w-8" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
