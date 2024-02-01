"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setProducts } from "@/lib/features/products";
import { ProductCard, Searchbar, FilterSection } from ".";
import { Product } from "@/types";
import { fetchData } from "@/lib/endpoint";

const ProductList = () => {
  const products = useAppSelector((state) => state.productReducer.products);
  const [filteredItems, setFilteredItems] = useState(products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchData(`https://fakestoreapi.com/products`).then((data) => {
      dispatch(setProducts(data));
      setFilteredItems(data);
    });
  }, [dispatch]);

  return (
    <div className="w-full mt-[5rem] lg:mt-[20rem]">
      <h2 className="text-gray-900 mb-20 text-center text-[20px] font-bold">
        Products
      </h2>
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <Searchbar setProducts={setFilteredItems} />
        <FilterSection products={filteredItems} setProducts={setFilteredItems}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
        {filteredItems &&
          filteredItems.map((product: Product) => (
            <ProductCard product={product} key={product?.id} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
