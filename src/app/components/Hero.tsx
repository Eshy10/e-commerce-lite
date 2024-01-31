"use client";

import Image from "next/image";

import Button from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("clothing");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col lg:flex hero w-full">
      <div className="flex-1 padding-x">
        <h1 className="hero__title">
          Shop Affordable wears here
        </h1>

        <p className="hero__subtitle">
         Get the best of all prices here!!
        </p>

        <Button
          title="Shop Now"
          containerStyles="bg-[#333333] text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/shopping.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;