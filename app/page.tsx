import Hero from "@/modules/home/components/hero";
import Features from "@/modules/home/components/features";
import ProductHighlight from "@/modules/home/components/product-highlight";
import InfoSections from "@/modules/home/components/info-sections";
import ProductGrid from "@/modules/home/components/product-grid";
import News from "@/modules/home/components/news";
import Newsletter from "@/modules/home/components/newsletter";
import ProductCheck from "@/modules/home/components/product-check";

export default function Home() {
   return (
      <div className="flex flex-col">
         <Hero />
         <Features />
         <ProductHighlight />
         <InfoSections />
         {/* First Grid */}
         <ProductGrid title="Sản phẩm mới nhất" subtitle="Tinh túy từ thiên nhiên" />

         {/* Product ProductCheck */}
         <ProductCheck />

         {/* Second Grid */}
         <ProductGrid title="Nhãn hàng riêng của chúng tôi" subtitle="Thương hiệu uy tín" />

         <News />
         <Newsletter />
      </div>
   );
}
