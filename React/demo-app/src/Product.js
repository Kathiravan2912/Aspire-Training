import React,{Component} from "react";
export class Product extends Component{
    render(){
         return (
            <div>
                <h1 style={{Color:'Red'}}>Product</h1>

                <ol>
                    <li>Laptops</li>
                    <li>Mobile Phones</li>
                    <li>Televisions</li>
                    <li>Refrigirator</li>
                </ol>
            </div>
         )
    }
}

export default Product