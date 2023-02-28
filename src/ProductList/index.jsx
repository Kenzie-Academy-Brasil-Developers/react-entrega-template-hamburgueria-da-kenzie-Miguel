import React from "react";
import { ProductCard } from "./ProductCard";
import { UlContainer } from "./style";

export const ProductList = ({ addCart, filterProduct }) => {
  return (
    <UlContainer>
      {filterProduct.map((product) => (
        <ProductCard key={product.id} product={product} addCart={addCart} />
      ))}
    </UlContainer>
  );
};
