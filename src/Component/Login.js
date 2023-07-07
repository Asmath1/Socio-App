import React, { useState } from "react";
import "./Login.css";
import logo from "./Assets/logo.png";
import btnlogo from "./Assets/image 16.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [data, setData] = useState({ Email: "", Password: "" });
  const [submitted, setSubmitted] = useState(false);
  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   if (data.Password === "" || data.Email === "") {
  //     setError(true);
  //     alert("Please enter all the fields");
  //   } else {
  //     alert("Registered Successfully");
  //     setError(false);
  //     setSubmitted(true);
  //     navigate("/Home");
  //   }
  // };

  const formSubmit = () => {
    navigate("/Home");
  };
  return (
    <div className="container">
      <img id="applogo" src={logo} alt="" />
      <form className="form-field">
        <div className="login-form">
          <div className="login-heading">
            <h1 id="heading1">Welcome Back</h1>
            <h2 id="heading2">Please enter your details</h2>
          </div>
          <div className="input-field">
            <div className="label-name">
              <label htmlFor="Email">Email</label>
              <input name="Email" type="text" placeholder="Enter your email" />
            </div>
            <div className="label-name">
              <label htmlFor="Password">Password</label>
              <input name="Password" type="text" placeholder="password" />
            </div>
          </div>
          <div className="btn">
            <button className="login-btn" onClick={formSubmit}>
              LOGIN
            </button>
            <button className="login-vpn">
              <img id="sign-in" src={btnlogo} alt="" />
              Sign in with VPN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
