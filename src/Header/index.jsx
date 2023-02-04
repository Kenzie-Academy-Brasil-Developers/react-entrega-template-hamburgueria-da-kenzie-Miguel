import React from "react";
import { InputSearch } from "../InputSearch";
import logo from "../assets/Mask Group.svg";
import { HeaderStyle, NavHeader } from "./style";

export const Header = ({ setFilteredProducts }) => {
  return (
    <HeaderStyle>
      <NavHeader>
        <img src={logo} alt="" />
        <InputSearch setFilteredProducts={setFilteredProducts} />
      </NavHeader>
    </HeaderStyle>
  );
};
