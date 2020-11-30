import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
    }

    //  for the normal function not arrow function we used in class component to bind this key wor
    clickHandler = () =>{
        this.setState({
            message:"this is my first binding event"
        })
        console.log(this);
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                {/* <button onClick={this.clickHandler}>click</button>   */}
                {/* <button onClick={()=>this.clickHandler()}>click</button>  */}


            </div>
        )
    }
}

export default EventBind
