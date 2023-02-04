import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products, addCart }) => {
  console.log("productList", products);
  return (
    <ul>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addCart={addCart} />
      ))}
    </ul>
  );
};
