import React, { Component } from "react";
import { Link } from 'react-router-dom'

export class Navigation extends Component {
    render() {
        return (
            <div className="lists">
                <div className='yellow-line'></div>
                <div className='Head-options'>
                    <ul className='mainList'>
                        <li className='logo'>POCO</li>
                        <Link to='Home'><li className="Home-option1">HOME</li>|</Link>
                        <Link to='Product'><li className="Home-option2">LOGIN</li>|</Link>
                        <Link to='ContactUs'><li className="Home-option3">SIGNUP</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation