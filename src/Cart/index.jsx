import React from "react";
import { CartCard } from "./CartCard";
import { DivGeneral, DivTitle, TitleCart, UlCart } from "./style";

export const Cart = ({ productCart, removeCart }) => {
  return (
    <DivGeneral>
      <DivTitle>
        <TitleCart>Carrinho de compras:</TitleCart>
      </DivTitle>
      <UlCart>
        {productCart.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            removeCart={removeCart}
          />
        ))}
      </UlCart>
    </DivGeneral>
  );
};
