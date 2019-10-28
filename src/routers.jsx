import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
const Routers = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </Switch>
  </Router>
);

export default Routers;
