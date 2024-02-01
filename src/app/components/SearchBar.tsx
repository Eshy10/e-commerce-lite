"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { useAppSelector } from "@/lib/hooks";
import { Product } from "@/types";

interface SearchBarProps {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SearchBar = ({ setProducts }: SearchBarProps) => {
  const [serchValue, setSearchValue] = useState("");
  const products = useAppSelector((state) => state.productReducer.products);

  const debouncedSearch = debounce((term: string) => {
    const filteredProduct = products.filter((product: Product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setProducts(filteredProduct);
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
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
