import  React, {Component} from 'react'

export default class Increment extends Component{
    constructor(props){
        super(props)

        this.state = {
            cart : 0
        }
    }

    incrementCount(event){
        this.setState({
            cart:this.state.cart + 1
        })
    }
    render(){
        <button onClick={()=>this.incrementCount(event)}></button>
    }
}