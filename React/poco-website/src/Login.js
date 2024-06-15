import React,{Component} from "react";
export class Login extends Component{
    render(){
         return (
            <div>
                <h1 style={{Color:'Red'}}>LOGIN</h1>
                <table>
                    <tr>
                        <td>UserName: </td>
                        <td><input type="text" required></input></td>
                    </tr>
                    <tr>
                        <td>E-Mail:</td>
                        <td><input type="Email" required></input></td>
                    </tr>
                </table>
                <button className="login">LOGIN</button>
            </div>
         )
    }
}

export default Login