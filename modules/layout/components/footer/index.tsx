import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-xl font-bold text-gray-900 mb-4">STOREFRONT</div>
            <p className="text-sm text-gray-500 max-w-xs">
              This is a wireframe for an e-commerce storefront. Build your premium shopping experience here.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-2">
              <li className="w-24 h-4 bg-gray-200 rounded animate-pulse"></li>
              <li className="w-20 h-4 bg-gray-200 rounded animate-pulse"></li>
              <li className="w-28 h-4 bg-gray-200 rounded animate-pulse"></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Support</h3>
             <ul className="space-y-2">
              <li className="w-20 h-4 bg-gray-200 rounded animate-pulse"></li>
              <li className="w-24 h-4 bg-gray-200 rounded animate-pulse"></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center sm:text-left">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Storefront Wireframe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
