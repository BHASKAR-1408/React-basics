import React, { Component } from 'react';

class Destructuring extends Component{
    render(){
        const {name} = this.props
        return (
        <h1>this is my name {name}</h1>
        )
    }
}

export default Destructuring;