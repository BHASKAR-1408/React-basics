import React, { Component } from 'react'

class Usergreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin:true,
             message:"welcome Mr.badivenkatagalla"
        }
    }
    // this is called condtional rendering with ternery operator

    render() {
        console.log(this.state.message);
        return (

            // most efficient method for conditional rendering
            // this.state.isLoggedin?
            // <div>{this.state.message}</div>
            // :<div>Welcome guest</div>

            //this is also another method for conditional rendering
            this.state.isLoggedin && <div>welcome bhaskar</div>
        )
    }
}

export default Usergreeting
