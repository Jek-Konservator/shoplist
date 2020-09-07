import React, { useContext } from "react";
import { StyledNewItemsModal, Hui } from "./styled";
import { ModalContext } from "../contexts/ModalContext";
import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";

export const NewItemsModal = () => {
  const { handleOpenModal } = useContext(ModalContext);

  return (
    <StyledNewItemsModal>
      <Hui>
        <Button
          color="primary"
          variant="contained"
          endIcon={<Close />}
          onClick={handleOpenModal}
        >
          Кнопка на лоха
        </Button>
      </Hui>
    </StyledNewItemsModal>
  );
};
