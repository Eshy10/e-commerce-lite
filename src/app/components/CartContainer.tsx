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

  return (
    <div>
      {cart && cart.length > 0 ? (
        cart.map((cartItem: CartProps) => (
          <div key={cartItem.id}>
            <Image
              src={cartItem.image}
              alt="hero"
              fill
              className="object-contain"
            />
            <p>{cartItem.title}</p>
            <p>{cartItem.price}</p>
            <p>{cartItem.quantity}</p>
            <div
              className={`flex items-center w-full justify-between mt-1 relative text-center`}
            >
              <button
                className={`bg-green rounded text-white w-[32px] h-[32px] transition-[width] ease-out duration-300 absolut`}
                onClick={() => removeCartItems(Number(cartItem.id))}
              >
                -
              </button>
                <button
                  className={`bg-green rounded text-white w-[32px] h-[32px] transition-[width] ease-out duration-300 absolut`}
                  onClick={() => addCartItems(cartItem)}
                >
                  +
                </button>
            </div>
          </div>
        ))
      ) : (
        <p>No Items in your cart</p>
      )}
    </div>
  );
};

export default CartContainer;
