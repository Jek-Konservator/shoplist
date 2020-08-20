import React from "react";
import { SimpleCardContainer } from "./styled";
import { CurrentCard } from "./Card";

export const SimpleCard = () => {
  return (
    <SimpleCardContainer>
      {[1, 2, 3, 4].map((card) => (
        <CurrentCard key={card} card={card} />
      ))}
    </SimpleCardContainer>
  );
};
