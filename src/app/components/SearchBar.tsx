"use client";

import Image from "next/image";
import React, { useState } from "react";
import { debounce } from "lodash";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setProducts } from "@/lib/features/products";
import { Product } from "@/types";

const SearchBar = () => {
  const [serchValue, setSearchValue] = useState("");
  const products = useAppSelector((state) => state.productReducer.products);
  const dispatch = useAppDispatch();

  const debouncedSearch = debounce((term: string) => {
    const filteredProduct = products.filter((product: Product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    dispatch(setProducts(filteredProduct));
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    if (term.trim() === "") {
      return 
    }
    setSearchValue(term);
    debouncedSearch(term);
  };

  return (
    <div className="searchbar__item">
      <input
        type="text"
        name="searchValue"
        value={serchValue}
        onChange={handleInputChange}
        placeholder="Search a Product..."
        className="searchbar__input"
      />
    </div>
  );
};

export default SearchBar;
