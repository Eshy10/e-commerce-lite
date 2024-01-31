import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCatIcon } from "../images";

const Navbar = () => {
  const [cartSize, setCartSize] = useState(0);
  
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <h3>LOGO</h3>
        </Link>

        <div className="relative cursor-pointer">
          <Image
            src={ShoppingCatIcon}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          {cartSize !== 0 && (
            <span className="absolute bottom-3 left-3 text-white bg-[#efde22] inline-flex items-center justify-center w-5 h-5 rounded-full">
              {cartSize}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
