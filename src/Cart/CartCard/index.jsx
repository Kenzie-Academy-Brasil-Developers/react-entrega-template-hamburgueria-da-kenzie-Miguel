import React from "react";

export const CartCard = ({ product, removeCart }) => {
  return (
    <li>
      <img src={product.img} />
      <h2>{product.name}</h2>
      <span>{product.category}</span>
      <span>{product.price}</span>
      <button onClick={() => removeCart(product.id)}>Remover</button>
    </li>
  );
};
