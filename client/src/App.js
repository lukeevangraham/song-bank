import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import Submit from "./components/pages/Submit"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/submit" component={Submit} />
        </div>
      </Router>
    );
  }
}

export default App;
