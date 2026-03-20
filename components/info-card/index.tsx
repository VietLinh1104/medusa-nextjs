import React from "react"
import Link from "next/link"
import Image from "next/image"

const InfoCard = ({ image, title, description, href, imgAlt, btnContent, reverse }: { image: string, title: string, description: string, href: string, imgAlt: string, btnContent: string, reverse: boolean }) => {
    return (
        <div className={`flex items-center gap-16 ${reverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row'}`}>
            <div className="w-full lg:w-1/2 index-1">
                <div className="relative group h-[350px] overflow-hidden">
                    <Image
                        src={image}
                        alt={imgAlt}
                        width={540}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* <div className="absolute inset-0 border-8 border-white group-hover:scale-95 transition-transform duration-500"></div> */}
                </div>
            </div>
            <div className="w-full lg:w-1/2 index-0">
                <h2 className="text-2xl font-black text-gray-900 uppercase mb-6 leading-tight">
                    {title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                    {description}
                </p>
                <Link href={href} className="inline-block bg-[#e85a31] text-white px-8 py-3 font-bold hover:bg-[#d14d2a] transition-colors uppercase tracking-widest text-xs">
                    {btnContent}
                </Link>
            </div>
        </div>
    )
}

export default InfoCard
