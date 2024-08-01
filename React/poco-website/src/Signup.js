import React, { Component } from "react";
import './SignupStyle.css';

export class Signup extends Component {
    render() {
        return (
            <div className="body">
                <form class="signup-form" action="/submit_signup" method="POST">
                <h1 style={{ textAlign: "center" }}>SIGNUP HERE</h1>
        <div class="form-group">
            <label for="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name" required/>
        </div>
        <div class="form-group">
            <label for="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" required/>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
            <label for="mobile_number">Mobile Number</label>
            <input type="tel" id="mobile_number" name="mobile_number" required/>
        </div>
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required/>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required/>
        </div>
        <button type="submit">Sign Up</button>
    </form>


            </div>
        )
    }
}

export default Signup