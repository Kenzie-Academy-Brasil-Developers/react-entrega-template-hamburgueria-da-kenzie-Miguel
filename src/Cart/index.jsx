import React from "react";
import { CartCard } from "./CartCard";
import {
  AddProduct,
  CartClean,
  DivCartClean,
  DivGeneral,
  DivTitle,
  TitleCart,
  UlCart,
} from "./style";
import { TotalCart } from "./TotalCart";

export const Cart = ({ productCart, removeCart, totalDelete }) => {
  return (
    <DivGeneral>
      <DivTitle>
        <TitleCart>Carrinho de compras:</TitleCart>
      </DivTitle>
      {productCart.length ? (
        <UlCart>
          {productCart.map((product) => (
            <CartCard
              key={product.id}
              product={product}
              removeCart={removeCart}
            />
          ))}
        </UlCart>
      ) : (
        <DivCartClean>
          <CartClean>Sua sacola está vazia</CartClean>
          <AddProduct>Adicione itens</AddProduct>
        </DivCartClean>
      )}
      <TotalCart productCart={productCart} totalDelete={totalDelete} />
    </DivGeneral>
  );
};
