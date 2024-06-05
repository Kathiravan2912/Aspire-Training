import React, { Component } from 'react'

export default class Wishing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "Kathiravan"
        }
    }
    ChangeName(event) {
        this.setState({
            username: event.target.value
        })
    }
    render(){
        return (
            <div>
            <h1>Hi {this.state.username} welcome</h1>
            Enter your Name: <input type='text' name='username' value={this.state.username} onChange={(event)=>this.ChangeName(event)}/>
            </div>
        )
    }
}