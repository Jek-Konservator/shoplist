import React, { useState } from "react";
import { StyleShoppingList } from "./styled";
import { SimpleCard } from "../Cards";
import { NewCardsIcon } from "../NewCards";

const ShoppingList = () => {
  const [items] = useState([1, 2, 3, 4]);

  return (
    <StyleShoppingList>
      <SimpleCard data={items} />
      <NewCardsIcon  />
    </StyleShoppingList>
  );
};

export default ShoppingList;
