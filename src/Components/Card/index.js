import React from "react";
import { CardActions, CardContent, Card, Button } from "@material-ui/core/";
import { SimpleCardContainer,StyledCard } from "./styled";

export default function SimpleCard() {
  return (
    <SimpleCardContainer>
      {[1, 2, 4, 44].map((card) => (
        <StyledCard>
          <CardContent>
            <div>Word of the Day {card}</div>
            <div>benevolent</div>
            <div>adjective</div>
            <div>well meaning and kindly.</div>
          </CardContent>
          <CardActions>
            <Button
              style={{ backgroundColor: "red" }}
              variant="contained"
              size="small"
            >
              Learn More
            </Button>
          </CardActions>
        </StyledCard>
      ))}
    </SimpleCardContainer>
  );
}
