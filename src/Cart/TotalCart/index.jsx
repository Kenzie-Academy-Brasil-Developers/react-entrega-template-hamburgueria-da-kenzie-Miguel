import React from "react";
import {
  ButtonRemove,
  DivButton,
  DivContainer,
  DivValueInfo,
  TotalInfo,
  TotalPrice,
} from "./style";

export const TotalCart = ({ productCart, totalDelete }) => {
  const totalCart = productCart.reduce((acc, ValueTotal) => {
    return ValueTotal.price + acc;
  }, 0);

  return (
    <DivContainer>
      <DivValueInfo>
        <TotalInfo>Total:</TotalInfo>
        <TotalPrice>R$: {totalCart.toFixed(2)}</TotalPrice>
      </DivValueInfo>
      <DivButton>
        <ButtonRemove onClick={totalDelete}>Remover todos</ButtonRemove>
      </DivButton>
    </DivContainer>
  );
};
