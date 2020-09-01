import React from "react";
import { StyledCard } from "../Cards/styled";
import { Content } from "./styled";
import { Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {NewItemsModal} from "../NewItemsModal";

export const NewCardsIcon = () => {
  return (
    <StyledCard>
      <Content>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary" onClick={NewItemsModal}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Content>
    </StyledCard>
  );
};
