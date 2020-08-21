import React from "react";
import { CardActions, CardContent, Button } from "@material-ui/core";
import { StyledCard } from "./styled";

export const CurrentCard = () => {
  return (
    <StyledCard>
      <CardContent>
        <>
          <div>Word of the Day</div>
          <div>benevolent</div>
          <div>adjective</div>
          <div>well meaning and kindly.</div>
        </>
      </CardContent>
      <CardActions>
        <Button
          style={{ backgroundColor: "#ffffff", border: "1px solid #000000" }}
          variant="contained"
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </StyledCard>
  );
};
