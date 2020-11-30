import React from 'react'

function ChaildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parents</button>
        </div>
    )
}

export default ChaildComponent;
