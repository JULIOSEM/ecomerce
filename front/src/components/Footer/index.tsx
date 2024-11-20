import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-12">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image 
              src="https://res.cloudinary.com/dhrys2lqz/image/upload/v1723912207/1486504353-cart-ecommerce-shop-commerce-supermarket-trolley-shopping_81310_ptmvkc.png" 
              className="h-10" 
              alt="Logo" 
              width={40} 
              height={40} 
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap">E-Commerce</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-lg font-medium sm:mb-0">
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="border-white" />
        <span className="block text-lg text-center mt-4">
          © 2024 JCSHOP™. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
