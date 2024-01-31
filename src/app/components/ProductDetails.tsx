"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { addToCart, removeFromCart } from "@/lib/features/cart";
import Image from "next/image";
import Button from "./CustomButton";
import { CartProps, Product } from "@/types";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [productQuantity, setProductQuantity] = useState(0);

  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const addCartItems = (item: CartProps) => {
    dispatch(addToCart(item));
    toast.success("Added to Cart");
  };

  const removeCartItems = (id: number) => {
    dispatch(removeFromCart(id));
    toast.success("Removed From Cart");
  };

  return (
    <div>
      <Image src="/wine-red.jpeg" alt="hero" fill className="object-contain" />
      <div>
        <p>product description</p>
        <div>
          {cart && cart?.length > 0 ? (
            <div
              className={`flex items-center w-full justify-between mt-1 relative text-center`}
            >
              <button
                className={`bg-green rounded text-white w-[32px] h-[32px] transition-[width] ease-out duration-300 absolut`}
                onClick={() => removeCartItems(Number(product.id))}
              >
                -
              </button>
              <div className="flex justify-between items-center w-full">
                <p className="text-center w-[40%] text-[#333333] ml-[27.5%]">
                  {productQuantity}
                </p>
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
