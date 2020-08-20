import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@material-ui/core/";
import { Container, StyledSwipeableViews } from "./style";
import ShoppingList from "../ShoppingList";

const SimpleBottomNavigation = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
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
    </Container>
  );
};

export default SimpleBottomNavigation;

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
