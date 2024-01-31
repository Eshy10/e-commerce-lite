"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useGetAllProductQuery } from "@/lib/services/product";
import { setProducts } from "@/lib/features/products";
import { ProductCard, Searchbar, FilterSection } from ".";
import { Product } from "@/types";
import { fetchData } from "@/lib/endpoint";


const ProductList = () => {
  const { data } = useGetAllProductQuery();
  const products = useAppSelector((state) => state.productReducer.products);
  const dispatch = useAppDispatch();


  useEffect(() => {
 fetchData(`https://fakestoreapi.com/products`).then(data => dispatch(setProducts(data)))
  }, [dispatch]);


  return (
    <div>
      <div className="w-full flex justify-between">
        <Searchbar />
        <FilterSection />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products &&
          products.map((product: Product) => (
              <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
