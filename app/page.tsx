import Hero from "@/modules/home/components/hero";
import Features from "@/modules/home/components/features";
import ProductHighlight from "@/modules/home/components/product-highlight";
import InfoSections from "@/modules/home/components/info-sections";
import ProductGrid from "@/modules/home/components/product-grid";
import ProductBanner from "@/modules/home/components/product-banner";
import News from "@/modules/home/components/news";
import Newsletter from "@/modules/home/components/newsletter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <ProductHighlight />
      <InfoSections />
      
      {/* First Grid */}
      <ProductBanner title="Mật ong Manuka" />
      <ProductGrid title="Sản phẩm mới nhất" subtitle="Tinh túy từ thiên nhiên" />
      
      {/* Product Highlight Banner (Large Image from reference) */}
      <section className="bg-gray-100 py-12">
         <div className="max-w-7xl mx-auto px-4 overflow-hidden relative min-h-[500px] flex items-center group cursor-pointer">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 font-bold uppercase tracking-[0.5em] group-hover:scale-105 transition-transform duration-1000">
               Large Showcase Image
            </div>
            <div className="relative z-10 max-w-lg p-12 bg-white/90 backdrop-blur-sm ml-12 border-l-8 border-[#e85a31] shadow-2xl">
               <h3 className="text-2xl font-black text-gray-900 uppercase mb-4 italic">Mật ong Manuka Úc</h3>
               <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                  Trải nghiệm sự tinh khiết và hương vị đậm đà từ những tổ ong được chăm sóc kỹ lưỡng nhất. Sản phẩm được đóng gói trực tiếp tại Úc.
               </p>
               <ul className="space-y-3 mb-8">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-center text-xs font-bold text-[#004225] uppercase">
                       <span className="w-2 h-2 bg-[#e85a31] rounded-full mr-3"></span>
                       Lợi ích vượt trội {i}
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>

      {/* Second Grid */}
      <ProductGrid title="Nhãn hàng riêng của chúng tôi" subtitle="Thương hiệu uy tín" />
      
      <News />
      <Newsletter />
    </div>
  );
}
