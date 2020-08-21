import React from "react";
import { SimpleCardContainer } from "./styled";
import { CurrentCard } from "./Card";

export const SimpleCard = ({ data }) => {
  return (
    <SimpleCardContainer>
      {data.map((card) => (
        <CurrentCard key={card} card={card} />
      ))}
    </SimpleCardContainer>
  );
};
