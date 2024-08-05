import { useState } from "react";
// import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/auth/login", { Email, Password })
      .then((response) => {
        console.log(response);

        if(response.status == 200){
            localStorage.setItem('isAuth' , 'erfedfcs');
            // localStorage.setItem('isAuth' , response.data.token);
            window.location.href = '/';
        }      
      })
      .catch((err) => console.log(err));
  };

  const logout = ()=>{
    localStorage.setItem('isAuth' , '');
    navigate('/');
  }

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

        <button type="button" onClick={logout}>Logout</button>

      </form>
    </div>
    </div>
  );
};

export default Login;
