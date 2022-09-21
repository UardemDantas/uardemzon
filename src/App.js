import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/checkout"  component={Checkout}/>
           
          
          <Route exact path="/login"  component={Login}/>
            
          
          <Route  exact path="/"  component={Home}/>
       
          
        </Switch>
      
    </Router>
  );
}

export default App;
