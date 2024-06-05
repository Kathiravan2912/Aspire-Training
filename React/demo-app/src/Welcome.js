import React, { Component } from 'react'
export default class Welcome extends Component{
    render(){
    return(
        <div>Hey...There!!!
            <h1 style={{color:'red'}}>Hello...Kathiravan..Welcome to Learn react</h1>
            <h2 style={{color:'this.props.'}}>Hello {this.props.name},</h2>
            <h2 style={{color:'green'}}>You are from  {this.props.Location} </h2>
            <h3>Tomorrow's topic: {this.props.children}</h3>
            <p></p>
            <p></p>
            </div>
    )
}
}

