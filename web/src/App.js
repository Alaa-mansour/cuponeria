import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {GlobalProvider} from "./context/GlobalState";

import GlobalStyles from "./styles/GlobalStyles";

import HomePage from "./pages/home";
import RegisterPage from "./pages/register";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/cadastrar" exact component={RegisterPage}/>
        </Switch>

        <GlobalStyles />
      </Router>
    </GlobalProvider>


  );
}

export default App;
