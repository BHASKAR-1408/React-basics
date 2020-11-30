import React, { Component } from 'react';

class State extends Component{

    //constructor for holding state object

    constructor(){
        super()
        this.state = {
            message:"subscribe"
        }
    }

    //Function for onclick event
    changeMessage = ()=>{
        this.setState({
            message:"Thanks for subscription"
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()} >subscribe</button>
            </div>
        )
    }
}

export default State;