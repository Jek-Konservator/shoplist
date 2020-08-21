import React, { useState } from "react";
import { StyleShoppingList } from "./styled";
import { SimpleCard } from "../Cards";
import { NewCardsIcon } from "../NewCards";

const ShoppingList = () => {
  const [items, setItems] = useState([1, 2, 3, 4]);

  const addCard = () => {
    // const newItems =

    console.log(items.push(5));
      setItems(items)
  };

  return (
    <StyleShoppingList>
      <SimpleCard data={items} />
      <NewCardsIcon addCard={addCard} />
    </StyleShoppingList>
  );
};

export default ShoppingList;
