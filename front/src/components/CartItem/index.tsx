import { IProductCardProps } from '@/interfaces/Interfaces'
import Image from 'next/image'
import React from 'react'

export default function CartItem({product, remove}: IProductCardProps) {
  return (
    <div className='flex w-full border-gray-500 my-10 font-bold justify-around items-center'>
        <div className='w-1/3 flex justify-center items-center'>
            <Image 
                src={product.image} 
                alt={product.name} 
                width={150} 
                height={150}
                className='h-32 mr-6'
            />  
            <span className='ml-3'>{product.name}</span>
        </div>
        <div className='w-1/3 text-center'>{product.quantity}</div>
        <div className='w-1/3 text-center'>$ {product.price}</div>
        <div className='w-1/3 text-center'>
            <button
               onClick={remove}
               className='ml-auto'
            >
            X
            </button>
        </div>
    </div>
  )
}
