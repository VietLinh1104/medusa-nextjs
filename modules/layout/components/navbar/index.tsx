"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useCart } from "@/lib/context/cart-context"

const Navbar = () => {
  const { toggleCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Hệ thống cửa hàng", href: "/stores" },
  ]

  useEffect(() => {
    // ... handles scroll ...
  }, [])

  return (
    <nav className="w-full z-50 font-sans">
      {/* Top Bar - Hidden on scroll and mobile */}
      <div
        className={`bg-[#e85a31] text-white text-[11px] sm:text-[13px] font-medium transition-all duration-300 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-[40px] sm:h-[34px] opacity-100"
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col sm:flex-row justify-center sm:justify-between items-center py-1 sm:py-0">
          <div className="flex items-center">
            <span className="truncate">Hotline: <span className="font-bold underline">0912.989.876</span></span>
            <span className="hidden sm:block border-l border-white/30 h-3 mx-4"></span>
            <Link href="/contact" className="hidden sm:block hover:text-gray-200">Liên hệ</Link>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
               </svg>
               <span>Thông báo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar - Sticky */}
      <div className={`bg-white transition-shadow duration-300 h-[60px] sm:h-[73px] ${isScrolled ? "fixed top-0 left-0 w-full shadow-md z-60" : "relative border-b border-gray-100"}`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            
            {/* Left: Mobile Menu Button & Logo */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 -ml-2 text-gray-700 hover:text-[#e85a31] transition-colors"
                aria-label="Toggle menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <Link href="/" className="flex items-center space-x-2 shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-[#d4b068] rounded-full flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-[#d4b068]" fill="currentColor">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                </div>
                <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#d4b068]">
                  Manuka <span className="text-[#d4b068]/80 font-medium hidden xs:inline">Eco</span>
                </span>
              </Link>
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center space-x-8 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[14px] font-semibold text-gray-800 hover:text-[#e85a31] transition-colors py-[25px] relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e85a31] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right: Icons */}
            <div className="flex items-center space-x-2 sm:space-x-5 text-gray-700">
              <button className="hover:text-[#e85a31] p-1.5 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hidden sm:block hover:text-[#e85a31] p-1.5 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button
                onClick={toggleCart}
                className="relative p-1.5 hover:text-[#e85a31] transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute top-0 right-0 bg-[#e85a31] text-white text-[8px] sm:text-[10px] font-bold min-w-[16px] h-4 rounded-full flex items-center justify-center px-1 border-2 border-white group-hover:scale-110 transition-transform">1</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-100 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-101 shadow-2xl transition-transform duration-300 transform lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full uppercase tracking-widest ">
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold text-[#d4b068]">MENU</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[13px] font-bold text-gray-800 hover:text-[#e85a31] transition-colors pb-2 border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto pt-10 border-t border-gray-100">
             <div className="flex items-center space-x-4 text-gray-400">
                {/* Social icons placeholder */}
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#e85a31] hover:text-white transition-all cursor-pointer">f</div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#e85a31] hover:text-white transition-all cursor-pointer">t</div>
             </div>
             <p className="mt-6 text-[10px] text-gray-400 font-medium">Hotline: 0912.989.876</p>
          </div>
        </div>
      </div>

      {/* Spacer to prevent layout jump when main bar becomes fixed */}
      {isScrolled && <div className="h-20" />}
    </nav>
  )
}

export default Navbar
