import NewsCard from "@/components/news-card"

const News = () => {
  const posts = [
    {
      title: "SỰ THẬT ÍT AI BIẾT: Vì Sao Mật Ong Manuka Có Lọ Đặc Quánh, Lọ Lại Trong Veo?",
      date: "25 Tháng 11, 2025",
      description: "Nếu anh chị từng mua mật ong Manuka và thấy lọ thì đặc quánh – mịn như kem, lọ thì trong veo – tách lớp...",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1976&auto=format&fit=crop",
      href: "/news/1"
    },
    {
      title: "Lợi ích tuyệt vời của mật ong đối với trẻ em",
      date: "20 Tháng 11, 2025",
      description: "Mật ong Manuka không chỉ là thực phẩm bổ dưỡng mà còn là bài thuốc quý giúp tăng cường hệ miễn dịch cho trẻ nhỏ.",
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=2070&auto=format&fit=crop",
      href: "/news/2"
    },
    {
      title: "Quy trình khai thác mật ong tại các trang trại Úc",
      date: "15 Tháng 11, 2025",
      description: "Tìm hiểu quy trình thu hoạch mật ong nghiêm ngặt để đảm bảo giữ trọn vẹn tinh túy và hàm lượng MGO quý giá.",
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=2070&auto=format&fit=crop",
      href: "/news/3"
    }
  ]

  return (
    <section className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          {/* HEADER */}
          <p className="text-[#e85a31] text-[17px] font-medium ">Tin tức & Sự kiện</p>
          <h2 className="text-2xl sm:text-[34px] font-bold text-gray-500 uppercase">Bài viết mới nhất</h2>
          <div className="w-8 h-1 bg-[#e85a31] mx-auto my-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <NewsCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
