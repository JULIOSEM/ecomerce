import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="relative min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dhrys2lqz/image/upload/v1724822320/404-notFound_pr06no.jpg')" }}>

        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center py-4 md:py-8 text-center">
            <Link href="/home">
              <button className="text-white bg-third-color hover:bg-fourth-color focus:ring-4 focus:ring-first-color font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                Home
              </button>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}








