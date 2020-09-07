import React, { useContext } from "react";
import { SimpleCardContainer } from "./styled";
import { CurrentCard } from "./Card";
import { DataContext } from "../contexts/DataContext";

export const SimpleCard = () => {
  const { data } = useContext(DataContext);
  return (
    <SimpleCardContainer>
      {data.map((card) => (
        <CurrentCard key={card.id} card={card} />
      ))}
    </SimpleCardContainer>
  );
};
