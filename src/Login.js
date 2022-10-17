import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import "./Home.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="/assets/uardemzon_login.png" alt="login_imagem" />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button type="submit" className="login_signButton">
            Sign-In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Terms of Use . Please check the
          Privacy Notice , Cookie Notice and Interest Based Ads Notice.
        </p>

        <button className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
