import { NextApiRequest, NextApiResponse } from "next";
import type { Product } from "../../types/product";
import { products } from "../../data/products";


// Handler for /api/products
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | { message: string }>
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  // Return all products
  res.status(200).json(products);
}
