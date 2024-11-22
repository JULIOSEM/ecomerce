"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/cart";
import Link from "next/link";
import Button from "../Button";

export default function CartGrid() {
  const { cartItems, removeFromCart, total, proceedToCheckout } =
    useContext(CartContext);

  return (
    <div className="sm:px-20 md:px:40 lg:px-52 xl:px-60 pt-16">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="flex  items-center p-5 border-b">
            <div className="pe-4 ps-5" onClick={() => removeFromCart(item.id)}>
              x
            </div>
            <div className="pe-4">
              <img src={item.image} className=" w-36 h-auto" />
            </div>
            <div className="w-full">
              <p className="font-bold text-xs text-white">{item.name}</p>
            </div>
            <div className="w-full text-end pe-5">
              <p className="font-semibold text-white ">${item.price}.00</p>
            </div>
            <div>
            <Button content="DELETE" onClick={() => removeFromCart(item.id)} />
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center pt-44 text-white flex-col justify-center text-2xl">
          <p className="pb-4">You havent products yet</p>
          <Link href="/home" className="text-pageColor text-sm pt-3">
            Go shopping
          </Link>
        </div>
      )}
      {total > 0 && (
        <>
          <div className="flex justify-end pe-10 py-3">
            <p className="pe-5 font-bold text-pageColor">TOTAL</p>
            <p className="font-bold text-white">$ {total}.00</p>
          </div>
          <div className="flex justify-center">
            <Button content="CHECKOUT" onClick={proceedToCheckout} />
          </div>
        </>
      )}
    </div>
  );
}
