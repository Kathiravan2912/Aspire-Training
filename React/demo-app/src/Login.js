import React, { Component } from 'react';
import Hoc from './ModifiedComponent'



export class Login extends Component {
    render() {
        return (

            <div>
            <h2 class="topic" style={{ color: 'blue' }}>Login here!</h2>
            {/* <h4 style={{ color: 'red' }}>(No Account, Please scroll down to sign up!)</h4> */}
                <div class="body-login">
                    <div class="login-container">
                        <login>
                            <h2>Login</h2>
                            <div class="login-group">
                                <label for="username">Username:</label>
                                <input type="text" id="username"></input>
                            </div>
                            <div class="login-group">
                                <label for="password">Password:</label>
                                <input type="password" id="password"></input>
                            </div>
                            <button type="submit" onClick = {this.props.increaseCount}>Login</button><br></br>

                            <button >Logged in Count:{this.props.person}
                                </button>
                        </login>
                    </div>
                </div>
                </div>
        )
    }
}
export default Hoc(Login)



