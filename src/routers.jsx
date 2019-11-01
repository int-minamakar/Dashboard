import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
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
