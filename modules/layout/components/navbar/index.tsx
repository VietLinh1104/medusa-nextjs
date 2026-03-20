"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useCart } from "@/lib/context/cart-context"

const Navbar = () => {
  const { toggleCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="w-full z-50">
      {/* Top Bar - Hidden on scroll */}
      <div
        className={`bg-[#e85a31] text-white text-[13px] font-medium transition-all duration-300 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-[34px] opacity-100"
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          <div className="flex items-center">
            <span>Hotline: <span className="font-bold underline">0912.989.876</span> (8h - 12h, 13h30 - 17h)</span>
            <span className="border-l border-white/30 h-3 mx-4"></span>
            <Link href="/contact" className="hover:text-gray-200">Liên hệ</Link>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <span className="w-4 h-4 bg-white text-[#e85a31] rounded-full flex items-center justify-center text-[8px] font-bold absolute -top-1 -right-1">0</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <span>Thông báo</span>
          </div>
        </div>
      </div>

      {/* Main Bar - Sticky */}
      <div className={`bg-white transition-shadow duration-300 h-[73px] ${isScrolled ? "fixed top-0 left-0 w-full shadow-md" : "relative border-b border-gray-100"}`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 border-2 border-[#d4b068] rounded-full flex items-center justify-center p-1">
                  {/* Placeholder for Bee icon */}
                  <svg viewBox="0 0 24 24" className="w-full h-full text-[#d4b068]" fill="currentColor">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold tracking-tight text-[#d4b068]">
                  Manuka <span className="text-[#d4b068]/80 font-medium">Eco</span>
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {["Trang chủ", "Sản phẩm", "Blog", "Giới thiệu", "Hệ thống cửa hàng"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[14px] font-semibold text-gray-800 hover:text-[#e85a31] transition-colors py-[25px]"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-5 text-gray-700">
              <button className="hover:text-black p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hover:text-black p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button
                onClick={toggleCart}
                className="relative p-1 hover:text-black cursor-pointer group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-[#e85a31] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">1</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent layout jump when main bar becomes fixed */}
      {isScrolled && <div className="h-20" />}
    </nav>
  )
}

export default Navbar
