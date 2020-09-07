import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@material-ui/core/";
import { Container, StyledSwipeableViews } from "./style";
import ShoppingList from "../ShoppingList";
import { NewItemsModal } from "../NewItemsModal";
import { ModalContext } from "../contexts/ModalContext";
import { DataContext } from "../contexts/DataContext";
import { v4 } from "uuid";

const MainContent = () => {
  const [value, setValue] = React.useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([{ id: v4(), name: "Roma", age: 22 }]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const createNewCard = (name, age) => {
    data.push({ id: v4(), name, age });
  };
  const deleteCard = (id) => {
    const newData = data.filter((card) => card.id !== id);
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, createNewCard, deleteCard }}>
      <ModalContext.Provider value={{ handleOpenModal }}>
        <Container>
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab label="Смайлы" />
            <Tab label="Стикеры" />
            <Tab label="GIF" />
          </Tabs>
          <StyledSwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0}>
              <ShoppingList />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two123
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three123
            </TabPanel>
          </StyledSwipeableViews>
          {openModal && <NewItemsModal />}
        </Container>
      </ModalContext.Provider>
    </DataContext.Provider>
  );
};

export default MainContent;

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
