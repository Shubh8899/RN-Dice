import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "./src/globals/styles";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Landing from "./src/components/Landing";
import Search from "./src/components/Search";

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/search/:q" component={Search} />
          <Route exact path="/" component={Landing} />
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
