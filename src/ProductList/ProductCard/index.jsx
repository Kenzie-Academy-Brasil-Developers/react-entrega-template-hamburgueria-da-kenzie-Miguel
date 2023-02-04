import React from "react";

export const ProductCard = ({ product, addCart }) => {
  return (
    <li>
      <img src={product.img} alt="" />
      <h2>{product.name}</h2>
      <span>{product.category}</span>
      <span>{product.price}</span>
      <button id={product.id} onClick={() => addCart(product)}>
        Adicionar
      </button>
    </li>
  );
};
