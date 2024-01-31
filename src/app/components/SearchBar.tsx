"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setProducts } from "@/lib/features/products";
import { Product } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button
    type="submit"
    className={`-ml-3 z-10 ${otherClasses}`}
    title="search-icon"
  >
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [serchValue, setSearchValue] = useState("");
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (serchValue.trim() === "") {
      return alert("Please provide some input");
    }
    const filteredProduct = products.filter((product: Product) =>
      product.name.toLowerCase().includes(serchValue.toLowerCase())
    );
    dispatch(setProducts(filteredProduct));
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <input
          type="text"
          name="searchValue"
          value={serchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search a Product..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
