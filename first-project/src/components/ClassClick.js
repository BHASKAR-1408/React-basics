import React, { Component } from 'react'

class ClassClick extends Component {
    ClickHandler(){
        console.log("something");
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>clickme!</button>
            </div>
        )
    }
}

export default ClassClick
