import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto font-sans">
      <div className="max-w-[1440px] mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: About */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wider mb-6">Về Manuka Eco</h3>
            <p className="text-base text-gray-500 leading-relaxed font-medium max-w-sm">
              Manuka Eco - Nhà phân phối mật ong Manuka chính hãng của Úc 100%. Bằng niềm tin và sự quan tâm, chúng tôi mang đến món quà sức khỏe tinh túy thiên nhiên gửi tặng hàng triệu gia đình Việt Nam.
            </p>
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#e85a31] hover:text-white transition-all cursor-pointer">
                  {i === 1 && "f"}
                  {i === 2 && "t"}
                  {i === 3 && "i"}
                  {i === 4 && "y"}
                  {i === 5 && "l"}
                </div>
              ))}
            </div>
            <div className="space-y-3 pt-4">
              <p className="text-base font-bold text-gray-800">Phương thức thanh toán</p>
              <div className="flex flex-wrap gap-2">
                {["VNPAY", "ZaloPay", "Moca", "Kredivo"].map((p) => (
                  <div key={p} className="h-8 w-12 bg-gray-50 border border-gray-100 rounded-sm flex items-center justify-center text-[8px] font-bold text-gray-400 grayscale hover:grayscale-0 transition-all cursor-pointer uppercase">{p}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wider mb-6">Thông tin liên hệ</h3>
            <div className="space-y-4 text-base text-gray-500 font-medium">
              <p className="leading-relaxed">
                <span className="font-bold text-gray-800 block mb-1">Địa chỉ:</span>
                Tòa B1 số 105 đường Lạc Long Quân, phường Nghĩa Đô, quận Cầu Giấy, Hà Nội, Việt Nam.
              </p>
              <p><span className="font-bold text-gray-800">Điện thoại:</span> 091 298 9876</p>
              <p><span className="font-bold text-gray-800">Fax:</span> 0912.989.876</p>
              <p><span className="font-bold text-gray-800">Email:</span> info@mltrade.au</p>
            </div>
            <div className="space-y-3 pt-4">
              <p className="text-base font-bold text-gray-800 uppercase">Phương thức vận chuyển</p>
              <div className="flex flex-wrap gap-2">
                {["GHN", "NINJA", "AHAMOVE", "J&T"].map((s) => (
                  <div key={s} className="h-8 w-12 bg-gray-50 border border-gray-100 rounded-sm flex items-center justify-center text-[7px] font-bold text-gray-400 uppercase grayscale hover:grayscale-0 transition-all cursor-pointer">{s}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Links 1 */}
          <div>
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wider mb-6">Nhóm liên kết</h3>
            <ul className="space-y-3 text-base text-gray-500 font-medium">
              <li><Link href="/promotions" className="hover:text-[#e85a31] transition-colors">Sản phẩm khuyến mãi</Link></li>
              <li><Link href="/featured" className="hover:text-[#e85a31] transition-colors">Sản phẩm nổi bật</Link></li>
              <li><Link href="/products" className="hover:text-[#e85a31] transition-colors">Tất cả sản phẩm</Link></li>
            </ul>
          </div>

          {/* Column 4: Links 2 */}
          <div>
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wider mb-6">Nhóm liên kết</h3>
            <ul className="space-y-3 text-base text-gray-500 font-medium">
              <li><Link href="/search" className="hover:text-[#e85a31] transition-colors">Tìm kiếm</Link></li>
              <li><Link href="/about" className="hover:text-[#e85a31] transition-colors">Giới thiệu</Link></li>
              <li><Link href="/exchange-policy" className="hover:text-[#e85a31] transition-colors">Chính sách đổi trả</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#e85a31] transition-colors">Chính sách bảo mật</Link></li>
              <li><Link href="/terms" className="hover:text-[#e85a31] transition-colors">Điều khoản dịch vụ</Link></li>
              <li><Link href="/contact" className="hover:text-[#e85a31] transition-colors">Liên hệ</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="bg-[#e85a31] py-4">
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <p className="text-[11px] text-white font-bold uppercase tracking-widest">
            Copyright &copy; {new Date().getFullYear()} MANUKAECO.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
