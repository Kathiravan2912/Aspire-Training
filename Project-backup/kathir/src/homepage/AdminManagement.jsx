
import React, { useState } from "react";
import "./AdminManagement.css";
import { Link } from "react-router-dom"; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AdminManagement = () => {

    const[Name, setName] = useState();
    const[Email, setEmail] = useState();
    const[Password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Signup',{Name, Email, Password})
        .then(result => {console.log(result)
            navigate('/Login')
        }
    )
        .catch(err => console.log(err))
    }

  return (
    <div>
        <div className="signupMain">
      <h1>Admin Management</h1>
      <div className="signup">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br></br>
        <input
          type="text"
          placeholder="Enter your name"
          autoComplete="off"
          name="name"
          onChange={(e)=>setName(e.target.value)}
        />
        <br></br>
        <label>E-mail:</label>
        <br></br>
        <input
          type="email"
          placeholder="Enter your email"
          autoComplete="off"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}

        />
        <br></br>
        <label>Password:</label>
        <br></br>
        <input
          type="password"
          placeholder="Enter your password"
          autoComplete="off"
          name="password"
          onChange={(e)=>setPassword(e.target.value)}

        />
        <br></br>
        <br></br>
        <button type="submit" className="addAdmin-btn">Add Admin</button>
        </form>
        </div>
        <br></br>
        </div>
    </div>
  );
};

export default AdminManagement;
