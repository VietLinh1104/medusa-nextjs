import React from "react"

type ProductImageGalleryProps = {
  images: string[]
  name: string
  mgoBadge?: string
}

const ProductImageGallery = ({ images, name, mgoBadge }: ProductImageGalleryProps) => {
  return (
    <div className="md:w-1/2 space-y-4">
      <div className="aspect-1 bg-white border border-gray-100 flex items-center justify-center p-8 relative">
        <img
          src={`https://placehold.co/500x600/ffffff/000000?text=${encodeURIComponent(mgoBadge || "PRODUCT")}`}
          alt={name}
          className="max-h-full object-contain"
        />
        {/* MGO Badge */}
        {mgoBadge && (
          <div className="absolute top-10 right-10 w-16 h-16 bg-red-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg border-2 border-white">
            <span className="text-[10px] leading-3 font-bold">MGO</span>
            <span className="text-xl leading-5 font-bold">{mgoBadge}</span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((_, i) => (
          <div key={i} className={`aspect-square border cursor-pointer hover:border-[#e85a31] transition-colors p-1 flex items-center justify-center ${i === 0 ? 'border-[#e85a31]' : 'border-gray-200'}`}>
            <img src={`https://placehold.co/100x100/ffffff/dddddd?text=IMG+${i + 1}`} alt={`Thumbnail ${i + 1}`} className="max-h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImageGallery
