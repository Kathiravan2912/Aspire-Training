 import React, { Component } from "react";
 import "./LoginStyle.css";

 export class Login extends Component {
     render() {
         return (
             <div className="body">
                <div class="container">
                    <form class="login-form" id="loginForm">
                        <h2>Login to Poco Mobiles Community</h2>
                        <div class="input-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" required/>
                        </div>
                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" required/>
                        </div>
                        <button type="submit">LOGIN</button>
                        <div class="extra-links">
                            <a href="#">Forgot Password?</a>
                            <a href="#">Create Account</a>
                        </div>
                    </form>
                </div>

             </div>
         )
     }
 }

 export default Login