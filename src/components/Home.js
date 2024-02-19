import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import ParentLogin from "./ParentLogin"; // Assuming you have a ParentLogin component
import RegularLogin from "./RegularLogin"; // Assuming you have a RegularLogin component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/parents/login" component={ParentLogin} />
        <Route path="/login" component={RegularLogin} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
