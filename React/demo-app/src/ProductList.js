// import React, {Component} from 'react'
// import axios from 'axios'

// export class ProductList extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             product:[]
//         }
//     }
//     getAllProduct(){
//         axios.get("http://localhost:3000/products")
//         .then((response)=>void)
//         this.setState ({
//             product:response.data
//         }).catch((error)=>{
//             console.log('Unable to fetch data');
//         })
//     }

//     render(){
//         const products = this.state.product.map
//         ((product)=>{
//             return(
//                     <tr>
//                         <td>{product.id}</td>
//                         <td>{product.title}</td>
//                         <td>{product.price}</td>
//                         <td></td>
//                     </tr>
//                 )
//         })

//         return(
//             <div>
//                 <h2>Products List</h2>
//                 <table>
//                     <th>
//                         <td>product ID</td>
//                         <td>product Name</td>
//                         <td>product price</td>
//                     </th>
//                 </table>
//                 <button onClick={()=>this.getAllProduct()}>
//                         View products
//                 </button>
//             </div>
//         )
//     }
// }

// export default ProductList