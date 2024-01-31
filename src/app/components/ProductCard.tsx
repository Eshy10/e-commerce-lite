import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const productCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product?.id}`} className="border border-text-gray-900 p-6 rounded-md cursor-pointer">
      <Image src={product?.image} alt="hero" width={100} height={100} className="object-contain m-auto" />
      <div className="w-full flex justify-between mt-2">
        <p className="mb-1 text-gray-900">{product?.title}</p>
        <p className=" text-gray-900">{product?.price}</p>
      </div>
    </Link>
  );
};

export default productCard;
