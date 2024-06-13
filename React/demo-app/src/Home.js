import React, {Component} from "react";
import { Link } from "react-router-dom";

export class Home extends Component{
    render(){
         return (
            <div>
                <h1 className="Topic">Men's Costumes</h1>
                <h1 style={{textAlign:'center'}}>Welcome to Homepage</h1>
                <li>
                    <Link style={{textAlign:'center'}} to='/Home/MenShirts'>View all the Products...</Link>
                </li>
            </div>
         )
    }
}

export default Home