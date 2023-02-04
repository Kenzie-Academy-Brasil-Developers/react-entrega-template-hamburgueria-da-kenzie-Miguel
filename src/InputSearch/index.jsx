import React, { useState } from "react";
import { ButtonHeader } from "../Button";
import { FormInput, SearchInput } from "./style";

export const InputSearch = ({ setFilteredProducts }) => {
  const [searchValue, setSearchValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setFilteredProducts(searchValue);
    setSearchValue("");
  };

  return (
    <FormInput onSubmit={submit}>
      <SearchInput
        type="text"
        value={searchValue}
        onChange={(Event) => setSearchValue(Event.target.value)}
      />
      <ButtonHeader />
    </FormInput>
  );
};
