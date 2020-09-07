import React, { useContext } from "react";
import { StyledCard } from "../Cards/styled";
import { Content } from "./styled";
import { Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { ModalContext } from "../contexts/ModalContext";

export const NewCardsIcon = () => {
  const { handleOpenModal } = useContext(ModalContext);
  return (
    <StyledCard>
      <Content>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary" onClick={handleOpenModal}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Content>
    </StyledCard>
  );
};
