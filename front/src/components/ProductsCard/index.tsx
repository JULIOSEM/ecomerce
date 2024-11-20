import React from 'react';
import { IProductCardProps } from '@/interfaces/Interfaces';
import Link from 'next/link';

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 w-72 h-[420px] rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-between p-5 my-4">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-center pb-3 font-semibold text-lg">{product.name}</h2>
        
        <div className="relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-md transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
        </div>

        <p className="text-gray-300 text-center font-semibold py-3 text-xl">${product.price}</p>
        
        <Link href={`/detail/${product.id}`} passHref>
          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-l">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
}
