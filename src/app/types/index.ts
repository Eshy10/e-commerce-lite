import { MouseEventHandler } from "react";

export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    image: string;
    rating: Rating
  };

  export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

  export interface CartProps extends Product {
    quantity: number;
}