import React, {Component} from "react";
import {Link} from 'react-router-dom'

export class Nav extends Component{
    render(){
         return (
            <div className="lists">
                <Link to='Home'><li className="options">Home</li></Link>
                <Link to='Product'><li className="options">Product</li></Link>
                <Link to='ContactUs'><li className="options">ContactUs</li></Link>
            </div>
         )
    }
}

export default Nav