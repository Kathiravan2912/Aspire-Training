import React,{Component} from "react";

export class MenShirts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: 0,
            totalAmount: 0,
            product1: 100,
            product2: 300,
            product3: 100,
            product4: 300,
            product5: 200,
            product6: 450,
            product7: 570,
            product8: 520,
            product9: 600,
            product10: 730,
            product11: 2500,
            product12: 1000
        }
    }
    product1Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product1
        })
    }
    product2Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product2
        })
    }
    product3Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product3
        })
    }
    product4Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product4
        })
    }
    product5Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product5
        })
    }
    product6Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product6
        })
    }
    product7Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product7
        })
    }
    product8Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product8
        })
    }
    product9Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product9
        })
    }
    product10Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product10
        })
    }
    product11Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product11
        })
    }
    product12Amount = () => {
        this.setState({
            totalAmount: this.state.totalAmount + this.state.product12
        })
    }
    increaseCount(event) {
        this.setState({
            cart: this.state.cart + 1
        })  
    }
    showAlert = () => {
        if(this.state.cart === 0 && this.state.totalAmount === 0){
            alert(`You Have not purchased Any Product!`);
        }
        else{
        alert(`Your order for ${this.state.cart} products with amount of ${this.state.totalAmount} has been confirmed!`);
        window.location.reload();
        }
    };

    render() {
        return (
            <div className='container'>
                <div className='Topic'>MEN'S COSTUMES</div>
                <div className='images'>
                    <img src="/images/pic1.jpg" alt="img" />
                    <p>Price: Rs.100</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product1Amount(); }} >Add to cart</h5>
                </div>
                <div className='images'>
                    <img src="/images/pic2.jpg" alt="img" />
                    <p>Price: Rs.300</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product2Amount(); }} >Add to cart</h5>
                </div>
                <div className='images'>
                    <img src="/images/pic1.jpg" alt="img" />
                    <p>Price: Rs.100</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product3Amount(); }} >Add to cart</h5>
                </div>
                <div className='images'>
                    <img src="/images/pic3.jpg" alt="img" />
                    <p>Price: Rs.300</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product4Amount(); }} >Add to cart</h5>
                </div>
                <div className='images'>
                    <img src="/images/pic1.jpg" alt="img" />
                    <p>Price: Rs.200</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product5Amount(); }}  >Add to cart</h5>
                </div>
                <div className='images'>
                    <img src="/images/pic2.jpg" alt="img" />
                    <p>Price: Rs.450</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product6Amount(); }}  >Add to cart</h5>
                </div><div className='images'>
                    <img src="/images/pic3.jpg" alt="img" />
                    <p>Price: Rs.570</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product7Amount(); }}  >Add to cart</h5>
                </div><div className='images'>
                    <img src="/images/pic2.jpg" alt="img" />
                    <p>Price: Rs.520</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product8Amount(); }}  >Add to cart</h5>
                </div>
                <div className='images'>
                    <img src="/images/pic1.jpg" alt="img" />
                    <p>Price: Rs.600</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product9Amount(); }} >Add to cart</h5>
                </div>
                <div className='images'>
                    <img src="/images/pic3.jpg" alt="img" />
                    <p>Price: Rs.730</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product10Amount(); }}  >Add to cart</h5>
                </div><div className='images'>
                    <img src="/images/pic1.jpg" alt="img" />
                    <p>Price: Rs.2500</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product11Amount(); }}  >Add to cart</h5>
                </div><div className='images'>
                    <img src="/images/pic2.jpg" alt="img" />
                    <p>Price: Rs.1000</p>
                    <h5 className='AddCart' onClick={() => { this.increaseCount(); this.product12Amount(); }} >Add to cart</h5>
                </div>
                <br></br>
                <button className='add-to-cart-button'> Total number of products: {this.state.cart}</button>
                <button className='amount-button'> Total Amount: {this.state.totalAmount}</button><br></br>
                <div className='confirmation'>
                    <h3>Please confirm to buy the selected {this.state.cart} products and the total amount of your purchase is {this.state.totalAmount}</h3>
                    <button className='confirm-button' onClick={this.showAlert}>CONFIRM</button>
                </div>
            </div>
        )
    }
}

export default MenShirts