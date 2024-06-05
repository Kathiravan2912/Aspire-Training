import React, {Component} from 'react'

export default class Cart extends Component{
    constructor(props){
        super(props)

        this.state = {
            cart: 0
        }
    }

    increaseCount(event){
        this.setState({
            cart:this.state.cart + 1
        })
    }

    render() {
        return (
            <div>
                <div className='Topic'>Add To Cart</div>
                <button className='add-to-cart-button' onMouseOver={(event)=>this.increaseCount(event)} > cart:{this.state.cart}</button>
            </div>
        )
    }
}