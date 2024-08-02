import React, { useState } from "react";
// import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Login", { Email, Password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate('');
        } else if (result.data === "Incorrect password") {
          window.alert("Password is incorrect");
        } else if (result.data === "No user found") {
          window.alert("username not available");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="Homebody">
      <form onSubmit={handleSubmit}>
      <h1 className="Login">Login</h1>
        <div className="login">
          <label>E-mail:</label>
          <input
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            autoComplete="off"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
