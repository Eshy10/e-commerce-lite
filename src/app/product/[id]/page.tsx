"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { ProductDetails } from "@/components";
import { Product } from "@/types";
import { fetchData } from "@/lib/endpoint";

export default function Product() {
  const [product, setProduct] = useState();
  const params = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchData(`https://fakestoreapi.com/products/${params.id}`).then((data) =>
      setProduct(data)
    );
  }, [dispatch, params.id]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {product && <ProductDetails product={product as Product} />}
    </main>
  );
}
