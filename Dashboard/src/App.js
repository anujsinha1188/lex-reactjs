import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Charts from "./components/Charts";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Charts}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
