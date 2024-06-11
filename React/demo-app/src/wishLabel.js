import React, {Component} from 'react';
import Hoc from './ModifiedComponent';

export class WishLabel extends Component{

    // constructor(props){
    //     super(props)

    //     this.state={
    //         visitors: 0
    //     }
    // }
    // changeCount(){
    //     this.setState({
    //         visitors:this.state.visitors+1
    //     })
    // }

    render(){
         
        return(
            <div>
                <br/>
                <h3>WishLabel</h3>
                {/* <label onMouseOver={(event)=>this.changeCount(event)}>Visitors Count: {this.state.visitors}</label><br></br> */}
                Counter: {this.props.person}<br></br>
                <label onMouseOver={this.props.increaseCount}>Hover Here</label>
            </div>
        )
    }
}
export default Hoc(WishLabel)