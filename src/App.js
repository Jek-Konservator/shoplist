import React from "react";
import { AppContainer } from "./styled";
//import { Switch, Route } from "react-router-dom";
//import ContentPage from "./Components/Cards";
import GlobalStyle from "./Components/GlobalStyle";
import Header from "./Components/Header";
import SimpleBottomNavigation from "./Components/Menu/index";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#33eaff",
    },
    secondary: {
      main: "#2b2b2b",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <SimpleBottomNavigation />
        {/*<Switch>
        <Route exact path="/" component={ContentPage} />
        <Route path="/:id" component= />
      </Switch>*/}
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
