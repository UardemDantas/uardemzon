import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";
import { auth } from "./firebase";
import { useState } from "react";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = event => {
    event.preventDefault();
    //login logic
    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      history.push('/')
  })
  .catch(error => alert(error.message))
}

  const register = event => {
    event.preventDefault();
    //login register
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      
      if (auth) {
          history.push('/')
      }
  })
    .catch(e => alert(e.message));
  };

  return (
    <div className="login">
      <Link to = '/'>
        <img
          className="login_logo"
          src="/assets/uardemzon_login.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event =>setEmail(event.target.value)}  type="email" />
          <h5>Password</h5>
          <input value={password}  onChange={event => setPassword(event.target.value)} type="password" />
          <button onClick={login} type="submit" className="login_signButton">
            Sign-In
          </button>
        </form>

        <p>
          {" "}
          By continuing, you agree to Amazon's Terms of Use . Please check the
          Privacy Notice , Cookie Notice and Interest Based Ads Notice.
        </p>

        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
