import React from "react";
import { CartCard } from "./CartCard";

export const Cart = ({ productCart, removeCart }) => {
  return (
    <div>
      <h2>Carrinho:</h2>
      <ul>
        {productCart.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            removeCart={removeCart}
          />
        ))}
      </ul>
    </div>
  );
};
