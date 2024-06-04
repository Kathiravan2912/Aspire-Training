import React, { Component } from 'react'
export default class Registration extends Component {
    render() {
        return (
            <div class="container">
                <h1 style={{ color: 'red' }}>Sign Up Here...!</h1>
                <h2 class="info" style={{ color: 'blue' }}>Hello User, SignUp to Login!</h2>
                <div class="body-register">
                    <div class="register-container">
                        <register>
                            <h2>Sign Up</h2>
                            <div class="register-group">
                                <label for="username">Username:</label>
                                <input type="text"></input>
                            </div>
                            <div class="register-group">
                                <label for="email">Email:</label>
                                <input type="email"></input>
                            </div>
                            <div class="register-group">
                                <label for="number">Mobile Number:</label>
                                <input type="text"></input>
                            </div>
                            <div class="register-group">
                                <label for="password">Password:</label>
                                <input type="password"></input>
                            </div>
                            <div class="register-group">
                                <label for="confirm-password">Confirm Password:</label>
                                <input type="password"></input>
                            </div>
                            <button type="submit">Create Account</button>
                        </register>
                    </div>
                </div>
            </div>
        )
    }
}