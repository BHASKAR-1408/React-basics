import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        super()
        this.state = {
             count:0
        }
    }
    
    // Increment function
    increment = ()=>{
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log("callback value",this.state.count);
        })
    }
    

    // // previous state function for incrementing the count with the help of prevstate in multiple call of incrementing funtion

    // increment = ()=>{
    //     this.setState(prevState =>({
    //         count:prevState.count+1
    //     }),
    //     ()=>{
    //         console.log("callback value",this.state.count);
    //     })
    //     console.log(this.state.count);
    // }

    // multiple(){
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    // }


    //decrement function
    decrement = ()=>{
        this.setState({
            count:this.state.count-1
        },
        ()=>{
            console.log("callback value",this.state.count);
        })
    }

    render() {
        return (
            <div>
                <h1>Number:{this.state.count}</h1>
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement}>Decrease</button>
            </div>
        )
    }
}

export default Counter
