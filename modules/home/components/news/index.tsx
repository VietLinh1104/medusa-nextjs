import React from "react"
import Link from "next/link"

const News = () => {
  const posts = [
    { title: "Cách phân biệt mật ong Manuka thật và giả", date: "20/03/2024" },
    { title: "Lợi ích tuyệt vời của mật ong đối với trẻ em", date: "15/03/2024" },
    { title: "Quy trình khai thác mật ong tại Úc", date: "10/03/2024" }
  ]

  return (
    <section className="bg-gray-50 py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <p className="text-[#e85a31] font-bold text-xs uppercase tracking-[0.3em] mb-4 italic">Tin tức & Sự kiện</p>
           <h2 className="text-2xl font-black text-gray-900 uppercase">Bài viết mới nhất</h2>
           <div className="w-8 h-1 bg-[#d4b068] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white border border-gray-100 group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden">
               <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-300 font-bold uppercase text-[10px] tracking-widest overflow-hidden">
                  <span className="group-hover:scale-110 transition-transform duration-500">Thumbnail Image</span>
               </div>
               <div className="p-6">
                  <p className="text-[10px] text-[#e85a31] font-bold uppercase mb-2 tracking-widest">{post.date}</p>
                  <h3 className="text-sm font-black text-gray-900 uppercase mb-4 leading-relaxed group-hover:text-[#e85a31] transition-colors">{post.title}</h3>
                  <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#d4b068] border-b border-[#d4b068] decoration-2 underline-offset-4">
                     Xem thêm &rarr;
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
