import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged ((authUser)=> {
        if (authUser) {
          //the user is logged in
         dispatch ({
          type:'SET_USER',
          user:authUser,
         })   

        }else {
          //the user is logged out
          dispatch({
            type:'SET_USER',
            user:null,
           })   
        } 
      })

      return () => {
        unsubscribe();
      }
      
  },[]);

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
