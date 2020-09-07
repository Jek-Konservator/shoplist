import React, { useContext } from "react";
import { CardActions, CardContent, Button } from "@material-ui/core";
import { StyledCard } from "./styled";
import { DataContext } from "../contexts/DataContext";

export const CurrentCard = ({ card }) => {
  const { deleteCard } = useContext(DataContext);
  const deleteCardId = () => {
    deleteCard(card.id);
  };
  return (
    <StyledCard>
      <CardContent>
        <>
          <div>{card.name}</div>
          <div>{card.age}</div>
        </>
      </CardContent>
      <CardActions>
        <Button
          style={{ backgroundColor: "#ffffff", border: "1px solid #000000" }}
          variant="contained"
          size="small"
          onClick={deleteCardId}
        >
          Delete Card
        </Button>
      </CardActions>
    </StyledCard>
  );
};
