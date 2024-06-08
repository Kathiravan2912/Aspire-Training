import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:"User",
            Department:"----",
            Id:"000"
        }
    }
    changeName(event){
        this.setState({
            username:event.target.value
        })
    }
    changeDepartment(Department){
        this.setState({
            Department:Department.target.value
        })
    }
    changeId(Id){
        this.setState({
            Id:Id.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            showData: true
        });
    }

    render(){
        return (<div>
            {/* <h3>Hi {this.state.username}, You are from {this.state.Department} Department and Your Id is {this.state.Id}</h3> */}
            <div className='Employee-data-container'>
            <div className='Employee-data-form'>
            <h3 className='Topic'>Employee Details</h3>
            <label>Enter Your Name:</label><br></br>
            <input type = 'text' name='username' placeholder='Enter Your Name' onChange={(event)=>this.changeName(event)}/><br></br><br></br>
            <label>Enter Your Department:</label><br></br>
            <input type = 'text' name='Department' placeholder='Enter Department name' onChange={(Department)=>this.changeDepartment(Department)}/><br></br><br></br>
            <label>Enter Your ID:</label><br></br>
            <input type = 'text' name='Id' placeholder='Enter Id name' onChange={(Id)=>this.changeId(Id)}/><br></br><br></br>
            <button onClick={this.handleSubmit}>Get Data</button><br></br><br></br>
            {this.state.showData && (
                        <h2>Hi {this.state.username}, You are from {this.state.Department} Department and Your Id is {this.state.Id}</h2>
                    )}
            </div>
            </div>
            </div>
        )
    }
}