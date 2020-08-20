import React, { useState } from "react";
import { CardActions, CardContent, Button } from "@material-ui/core/";
import { StyledCard } from "./styled";

export const CurrentCard = (card) => {
  const [visible, setVisible] = useState(false);
  console.log(card);
  const toggleInfo = () => {
    setVisible(!visible);
  };

  return (
    <StyledCard>
      <CardContent>
        {visible && (
          <>
            <div>Word of the Day{card.card}</div>
            <div>benevolent</div>
            <div>adjective</div>
            <div>well meaning and kindly.</div>
          </>
        )}
      </CardContent>
      <CardActions>
        <Button
          style={{ backgroundColor: "red" }}
          variant="contained"
          size="small"
          onClick={toggleInfo}
        >
          Learn More
        </Button>
      </CardActions>
    </StyledCard>
  );
};
