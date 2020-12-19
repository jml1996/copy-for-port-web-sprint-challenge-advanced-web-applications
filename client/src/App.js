import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/bubblepage">Bubble Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/bubblepage" component={BubblePage} />
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
