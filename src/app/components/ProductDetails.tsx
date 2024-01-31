"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import Button from "./CustomButton";

const ProductDetails = () => {
  const [productQuantity, setProductQuantity] = useState(0);

  const handleAddToCart = () => {
    toast.success("Added to Cart");
  };

  return (
    <div>
      <Image src="/wine-red.jpeg" alt="hero" fill className="object-contain" />
      <div>
        <p>product description</p>
        <div>
          {productQuantity > 0 ? (
            <div
              className={`flex items-center w-full justify-between mt-1 relative text-center`}
            >
              <Button
                containerStyles={`bg-green rounded text-white w-[32px] h-[32px] transition-[width] ease-out duration-300 absolut`}
                handleClick={() => {}}
                title=""
              />
              -
              <div className="flex justify-between items-center w-full">
                <p className="text-center w-[40%] text-[#333333] ml-[27.5%]">
                  {productQuantity}
                </p>
                <Button
                  containerStyles="bg-green rounded text-white w-[32px] h-[32px]"
                  handleClick={() => {}}
                  title=""
                />
                +
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
                  handleClick={() => {}}
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
