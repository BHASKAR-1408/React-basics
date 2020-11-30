import React, { Component } from 'react'
import ChaildComponent from './ChaildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          name:"Bhaskar"   
        }

        // this.greeting = this.greeting.bind(this)
    }
    
    greeting=()=>{
        alert(`hello Mr.${this.state.name}`)
    }

    render() {
        return (
            <div>
                <ChaildComponent greetHandler={this.greeting} />
            </div>
        )
    }
}

export default ParentComponent
