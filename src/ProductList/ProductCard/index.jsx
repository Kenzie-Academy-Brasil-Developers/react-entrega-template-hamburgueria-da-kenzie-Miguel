import React from "react";
import {
  LiCard,
  DivImg,
  DivInfo,
  ButtonAddProduct,
  Title,
  Category,
  Price,
} from "./style";

export const ProductCard = ({ product, addCart }) => {
  return (
    <LiCard>
      <DivImg>
        <img src={product.img} alt="" />
      </DivImg>
      <DivInfo>
        <Title>{product.name}</Title>
        <Category>{product.category}</Category>
        <Price>R$ {product.price}</Price>
        <ButtonAddProduct id={product.id} onClick={() => addCart(product)}>
          Adicionar
        </ButtonAddProduct>
      </DivInfo>
    </LiCard>
  );
};
