import React, { useContext, useState } from "react";
import { StyledNewItemsModal, Hui } from "./styled";
import { ModalContext } from "../contexts/ModalContext";
import { Button, TextField, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { DataContext } from "../contexts/DataContext";

export const NewItemsModal = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const { handleOpenModal } = useContext(ModalContext);
  const { createNewCard } = useContext(DataContext);

  const onSubmit = () => {
    createNewCard(name, age);
    handleOpenModal();
  };

  return (
    <StyledNewItemsModal>
      <Hui>
        <TextField
          id="standard-basic"
          label="Standard"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Standard"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />

        <IconButton onClick={handleOpenModal}>
          <Close />
        </IconButton>

        <Button color="primary" variant="contained" onClick={onSubmit}>
          Создать карту
        </Button>
      </Hui>
    </StyledNewItemsModal>
  );
};
