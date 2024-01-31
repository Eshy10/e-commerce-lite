"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useGetAllProductQuery } from "@/lib/services/product";
import { setProducts } from "@/lib/features/products";
import { ProductCard, Searchbar, FilterSection } from ".";
import { Product } from "@/types";
import Link from "next/link";

const ProductList = () => {
  const { data } = useGetAllProductQuery();
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts(data as Product[]));
  }, [dispatch]);

  return (
    <div>
      <div className="w-full flex justify-between">
        <Searchbar />
        <FilterSection />
        {products &&
          products.map((product: Product) => (
            <Link key={product.id} href={`/producs/${product.name}`}>
              <ProductCard product={product} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
