import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Events from "./Pages/Events";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";
const Routers = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/:type/add" component={Add} />
      <Route path="/events/" component={Events} />
      <Route path="/:type/:id" component={Edit} />
    </Switch>
  </Router>
);

export default Routers;
