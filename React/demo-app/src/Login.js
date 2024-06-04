import React, { Component } from 'react'
export default class Registration extends Component {
    render() {
        return (
            <div>
            <h2 class="topic" style={{ color: 'blue' }}>Login here!</h2>
            <h4 style={{ color: 'red' }}>(No Account, Please scroll down to sign up!)</h4>
                <div class="body-login">
                    <div class="login-container">
                        <login>
                            <h2>Login</h2>
                            <div class="login-group">
                                <label for="username">Username:</label>
                                <input type="text"></input>
                            </div>
                            <div class="login-group">
                                <label for="password">Password:</label>
                                <input type="password"></input>
                            </div>
                            <button type="submit">Login</button>
                        </login>
                    </div>
                </div>
                </div>
        )
    }
}