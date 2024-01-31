import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { CartProps } from "@/types";

interface CartItems extends CartProps {
  quantity: number;
}

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);

  const getCartTotal = (): number => {
    return cart.reduce(
      (accumulator: number, item: CartItems) =>
        accumulator + item.quantity,
      0
    );
  };

  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <h3>LOGO</h3>
        </Link>

        <div className="relative cursor-pointer">
          <Image
            src={"/shopping-cart-icon.svg"}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          {getCartTotal() !== 0 && (
            <span className="absolute bottom-3 left-3 text-white bg-[#efde22] inline-flex items-center justify-center w-5 h-5 rounded-full">
              {getCartTotal()}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
