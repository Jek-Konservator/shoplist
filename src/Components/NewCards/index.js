import React from "react";
import { StyledCard } from "../Cards/styled";
import { Content } from "./styled";
import { Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export const NewCardsIcon = ({ addCard }) => {
  return (
    <StyledCard>
      <Content>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary">
            <AddIcon onClick={addCard} />
          </Fab>
        </Tooltip>
      </Content>
    </StyledCard>
  );
};
