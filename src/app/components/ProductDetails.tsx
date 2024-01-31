"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { addToCart, removeFromCart } from "@/lib/features/cart";
import Image from "next/image";
import Button from "./CustomButton";
import {  Product } from "@/types";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  

  const cart = useAppSelector((state) => state.cartReducer.cart);
  const dispatch = useAppDispatch();

  const addCartItems = (item: Product) => {
    dispatch(addToCart(item));
    toast.success("Added to Cart");
  };

  const removeCartItems = (id: number) => {
    dispatch(removeFromCart(id));
    toast.success("Removed From Cart");
  };

  return (
    <div>
      <Image src={product.image} alt="hero" width={100} height={100} className="object-contain" />
      <div>
        <p>product description</p>
        <div>
          {cart && cart?.length > 0 ? (
            <div
              className={`flex items-center w-full justify-between mt-1 relative text-center`}
            >
              <button
                className={`bg-green rounded text-white w-[32px] h-[32px] transition-[width] ease-out duration-300 absolut`}
                onClick={() => removeCartItems(product.id)}
              >
                -
              </button>
              <div className="flex justify-between items-center w-full">
                <button
                  className={`bg-green rounded text-white w-[32px] h-[32px] transition-[width] ease-out duration-300 absolut`}
                  onClick={() => addCartItems(product)}
                >
                  +
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div
                className={`transition-[width] duration-300 ease-out $ 'w-full`}
              >
                <Button
                  title="Add to Cart"
                  containerStyles={`break-keep overflow-hidden w-full min-h-[32px] max-h-[35px] bg-green`}
                  handleClick={() => addCartItems(product)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
