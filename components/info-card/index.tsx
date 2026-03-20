import React from "react"
import Link from "next/link"
import Image from "next/image"

const InfoCard = ({ image, title, description, href, imgAlt, btnContent, reverse }: { image: string, title: string, description: string, href: string, imgAlt: string, btnContent: string, reverse: boolean }) => {
    return (
        <div className={`flex items-center gap-8 sm:gap-16 ${reverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row'}`}>
            <div className="w-full lg:w-1/2">
                <div className="relative group h-[250px] sm:h-[350px] overflow-hidden rounded-sm">
                    <Image
                        src={image}
                        alt={imgAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase mb-4 sm:mb-6 leading-tight">
                    {title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                    {description}
                </p>
                <Link href={href} className="inline-block bg-[#e85a31] text-white px-6 sm:px-8 py-2.5 sm:py-3 font-bold hover:bg-[#d14d2a] transition-colors uppercase tracking-widest text-[10px] sm:text-xs">
                    {btnContent}
                </Link>
            </div>
        </div>
    )
}

export default InfoCard
