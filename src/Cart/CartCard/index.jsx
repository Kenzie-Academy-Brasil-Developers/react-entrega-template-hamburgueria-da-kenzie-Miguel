import React from "react";
import {
  ButtonRemove,
  DivCard,
  DivImg,
  DivInfo,
  ImgCard,
  LiCard,
  TitleProduct,
  CategoryProduct,
} from "./style";

export const CartCard = ({ product, removeCart }) => {
  return (
    <LiCard>
      <DivCard>
        <DivImg>
          <ImgCard src={product.img} />
        </DivImg>
        <DivInfo>
          <TitleProduct>{product.name}</TitleProduct>
          <CategoryProduct>{product.category}</CategoryProduct>
        </DivInfo>
      </DivCard>
      <ButtonRemove onClick={() => removeCart(product.id)}>
        Remover
      </ButtonRemove>
    </LiCard>
  );
};
