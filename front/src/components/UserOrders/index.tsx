"use client"

import React, { useContext, useEffect, useRef } from "react";
import { UserContext } from "@/context/user";
import { CartContext } from "@/context/cart";

export default function UserOrders() {
  const { getOrders, orders } = useContext(UserContext);
  const { orderTotals } = useContext(CartContext);
  const didFetchOrders = useRef(false); // Este ref se utiliza para asegurar que solo se haga una llamada

  useEffect(() => {
    if (!didFetchOrders.current) {
      getOrders();
      didFetchOrders.current = true; // Marca que ya se hizo la llamada
    }
  }, [getOrders]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">My orders</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((Order, index) => {
            const orderDate = new Date(order.date);
            return (
              <li key={order.id} className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 p-6">
                <div className="flex-1">
                  <p className="mb-2 text-xl font-semibold text-gray-900">Order ID: {order.id}</p>
                  <p className="font-normal text-gray-700">Total: ${orderTotals[index]}</p>
                  <p className="font-normal text-gray-700">Date: {orderDate.toLocaleDateString()}</p>
                  <p className="font-normal text-gray-700">Time: {orderDate.toLocaleTimeString()}</p>
                </div>
                
                {/* Mostrar productos comprados en la orden */}
                <div className="flex-1 mt-4 md:mt-0 md:ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Purchased products:</h3>
                  <ul>
                    {order.products.map((product) => (
                      <li key={product.id} className="mb-2">
                        <p className="font-medium text-gray-800">Product: {product.name}</p>
                        <p className="text-gray-700">
                        Price per unit: ${product.price}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>You dont have orders in this moment.</p>
      )}
    </div>
  );
};