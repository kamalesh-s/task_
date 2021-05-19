import React from "react";
import './App.css';
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  
  return (
    <Router>
    <div className="app">
    <Home/>
      <Switch> 
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
