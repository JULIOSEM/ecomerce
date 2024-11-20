import React from 'react'
import CartComponent from '@/components/CartComponent'

export default function Checkout() {
    return (
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="container mx-auto px-4 pt-8">
            <div className="flex justify-between border-b-2 border-gray-300 pb-2">
                <div className="w-1/3 text-center font-bold">
                    <span>PRODUCT</span>
                </div>
                <div className="w-1/3 text-center font-bold">
                    <span>QUANTITY</span>
                </div>
                <div className="w-1/3 text-center font-bold">
                    <span>PRICE</span>
                </div>
                <div className="w-1/3 text-center font-bold">
                    <span>REMOVE</span>
                </div>
            </div>

            <CartComponent />

            <div className="flex justify-end mt-10 text-2xl font-bold">
                <span>TOTAL</span>
            </div>
        </div>
        </div>
    )
}