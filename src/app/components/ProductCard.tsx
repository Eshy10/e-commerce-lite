import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const productCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Image src={product.image} alt="hero" width={100} height={100} className="object-contain" />
      <div className="w-full flex justify-between">
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
    </Link>
  );
};

export default productCard;
