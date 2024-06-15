import React, { Component } from 'react';

export class PocoMain extends Component {
    render() {
        return (
            <div>
                <div className='yellow-line'></div>
                <div className='Head-options'>
                    <ul className='mainList'>
                        <li className='logo'>POCO</li>
                        <li className='Home-option1'>HOME</li> |
                        <li className='Home-option2'>LOGIN</li> |
                        <li className='Home-option3'>SIGN UP</li>
                    </ul>
                </div>
                <div className='Product-category'>
                    <ul className='product-options'>
                        <li className='category'>POCO-BUDGET MAKER</li>
                        <li>POCO C-SERIES</li>
                        <li>POCO M-SERIES</li>
                        <li>POCO X-SERIES</li>
                        <li>POCO F-SERIES</li>
                        <li>FOR GAMERS</li>
                        <li>NEW ARRIVED</li>
                    </ul>
                </div>
                <div className='tagLine'>
                        <h2>WHAT YOU NEED WHEN POCO IS HERE!!!</h2>
                        <h2>CHOOSE POCO, CHOOSE HAPPINESS...</h2>
                </div>
                <div className='end-line'></div>
                <div className='communication'>
                    <h4 className='follow'>FOLLOW US ON:
                        <ul className='icons'>
                        <li> <img src='./images/facebook.png' alt="facebook"/></li>
                        <li> <img src="./images/instagram.png" alt="instagram"/></li>
                        <li> <img src="./images/twitter.png" alt="twitter"/></li>
                        <li> <img src="./images/youtube.png" alt="youtube"/></li>
                        </ul>
                        </h4>
                </div>
                <div className='contactUs'>
                <h4 className='contact'>CONTACT US:</h4>
                <form>
                    Your Name:<br></br>
                    <input type='text'></input><br></br>
                    E-Mail:<br></br>
                    <input type='email'></input><br></br>
                    Queries:<br></br>
                    <textarea></textarea><br></br>
                    <button className='submit' type='submit'>SUBMIT</button>
                </form>
                </div>
            </div>
        )
    }
}

export default PocoMain