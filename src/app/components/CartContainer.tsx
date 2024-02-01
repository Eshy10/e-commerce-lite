"use client";

import React from "react";
import Image from "next/image";
import { useAppSelector,  useAppDispatch } from "@/lib/hooks";
import { addToCart, removeFromCart } from "@/lib/features/cart";
import { CartProps } from "@/types";


const CartContainer = () => {
  const cart = useAppSelector((state) => state.cartReducer.cart);

  const dispatch = useAppDispatch();

  const addCartItems = (item: CartProps) => {
    dispatch(addToCart(item));

  };

  const removeCartItems = (id: number) => {
    dispatch(removeFromCart(id));

  };

  const getTotal = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="w-full mt-[5rem]">
      <h2 className="text-gray-900 mb-20 text-center text-[20px] font-bold">Cart</h2>
      {cart && cart.length > 0 ? (
        cart.map((cartItem: CartProps) => (
          <div key={cartItem.id} className="border-b pb-4 mt-4">
            <Image
              src={cartItem?.image}
              alt="hero"
              width={100} height={100}
              className="object-contain mb-10"
            />
            <p className="text-gray-900 mb-4">Name: {cartItem?.title}</p>
            <p className="text-gray-900 mb-4">Price: {cartItem?.price}</p>
            <p className="text-gray-900 mb-4">Quantity: {cartItem?.quantity}</p>
            <div
              className={`flex items-center w-full lg:w-[20%] justify-between mt-4 text-center`}
            >
              <button
                className={`bg-[#b3b0b0] rounded text-white w-[32px] h-[32px] cursor-pointer transition-[width] ease-out duration-300`}
                onClick={() => removeCartItems(cartItem?.id)}
              >
                -
              </button>
                <button
                  className={`bg-[#b3b0b0] rounded text-white w-[32px] h-[32px] cursor-pointer transition-[width] ease-out duration-300`}
                  onClick={() => addCartItems(cartItem)}
                >
                  +
                </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-900 text-center">No Items in your cart</p>
      )}
        <h2 className="text-gray-900 mt-4">Total: {getTotal()}</h2>
    </div>
  );
};

export default CartContainer;
