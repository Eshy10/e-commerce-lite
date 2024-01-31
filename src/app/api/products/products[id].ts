import { NextApiRequest, NextApiResponse } from 'next';
import type { Product } from "../../types/product";
import { products } from "../../data/products";


export default function handler(req: NextApiRequest, res: NextApiResponse<Product | { message: string }>) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { id } = req.query;

  const product = products.find((p) => p.id === id);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  res.status(200).json(product);
}
