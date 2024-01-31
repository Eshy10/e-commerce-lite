import { MouseEventHandler } from "react";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    amount: number;
    image: string;
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

  export interface CartProps {
    id: string;
    name: string;
    description: string;
    price: number;
    amount: number;
    image: string;
}