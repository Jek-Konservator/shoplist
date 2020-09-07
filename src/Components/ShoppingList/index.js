import React from "react";
import { StyleShoppingList } from "./styled";
import { SimpleCard } from "../Cards";
import { NewCardsIcon } from "../NewCards";

const ShoppingList = () => {
  return (
    <StyleShoppingList>
      <SimpleCard />
      <NewCardsIcon />
    </StyleShoppingList>
  );
};

export default ShoppingList;
