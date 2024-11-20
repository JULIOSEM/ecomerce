import React from 'react';
import Image from 'next/image';
import { fetchProductById } from '@/lib/server/fetchProducts';
import AddToCart from '@/components/AddToCart';
import NotFound from '@/app/not-found';
import Link from 'next/link';
import { IProduct } from '@/interfaces/Interfaces';

export default async function ProductDetail({ params }: { params: { productId: string } }) {
  const product: IProduct | null = await fetchProductById(params.productId);
  if (!product) {
    return (
      <div className="pt-16 h-screen w-screen flex flex-col justify-center items-center text-gray-800">
        {<NotFound />}
        <h2 className="text-3xl font-bold">Product not found</h2>
        <Link href="/home" className="mt-4 text-blue-600 underline hover:text-blue-800 transition-colors">
          Click here to return to the home page
        </Link>
      </div>
    );
  }
  return (
    <section
      className="flex justify-center p-6 pt-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.ringtina.com.ar/Descargar/Fondos%20de%20Pantalla/Abstractos/ImgAbstractos%20068.jpg')",
      }}
    >
      <div className="flex max-w-5xl w-full bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        {product?.image && (
          <div className="flex justify-center items-center bg-gray-800 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[300px] w-auto">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain h-full w-full p-2 transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-col justify-between p-6 w-1/2">
          <h2 className="text-3xl font-bold mb-2">{product?.name}</h2>
          <p className="text-2xl font-semibold text-red-400">${product?.price}</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold border-b-2 border-gray-600 pb-1">DETAILS:</h4>
            <p className="mt-2 text-gray-300">{product?.description}</p>
            <p className="mt-1 text-gray-300">
              Stock: <span className="font-semibold text-red-400">{product?.stock}u</span>
            </p>
          </div>
          <div className="mt-6">
            <AddToCart id={product.id} />
          </div>
        </div>
      </div>
    </section>
  );
}
