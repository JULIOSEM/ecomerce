"use client";


import React, { useContext } from 'react'
import { CartContext } from '@/context/cart';
import { UserContext } from '@/context/user';

export default function AddToCart({id}: {id: number}) {
    const {addToCart} = useContext(CartContext);
    const { isLogged } = useContext(UserContext)

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        
      if (!isLogged) {
        alert("You need to be logged in to add items to the cart")
        return;
      }
      addToCart(id)
    }
  return (
    <button 
    type='button'
    onClick={handleClick}
    className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors duration-300'
  >
    Add to cart
  </button>
  
  )
}
