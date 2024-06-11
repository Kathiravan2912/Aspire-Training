import {Component} from 'react';
const Hoc = (OriginalComponent)=>{
    return class ModifiedComponent extends Component{

        constructor(props){
            super(props)
                this.state = {
                    person: 0
                
            }
        }
        increaseCount(event){
            this.setState(
                {
                    person:this.state.person + 1
                }
            )
        }
        render() {
            return (
                <div>
                <OriginalComponent person =  {this.state.person} 
                increaseCount = {(event)=>this.increaseCount(event)}>
                </OriginalComponent>
                </div>
            )
        }
    }

}
export default Hoc