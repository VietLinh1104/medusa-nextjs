"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

interface NewsCardProps {
  image: string
  title: string
  description: string
  date: string
  href: string
}

const NewsCard = ({ image, title, description, date, href }: NewsCardProps) => {
  return (
    <div className="bg-white border border-gray-100 group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Featured Image Section */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />


      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-[17px] font-black text-gray-800 uppercase mb-3 leading-tight group-hover:text-[#e85a31] transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed font-medium mb-6 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto">
          <div className="h-px w-full bg-gray-100 mb-4"></div>
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-gray-400 font-medium italic">{date}</span>
            <Link href={href} className="text-[12px] font-bold text-gray-400 hover:text-[#e85a31] transition-colors flex items-center gap-1 group/btn">
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
