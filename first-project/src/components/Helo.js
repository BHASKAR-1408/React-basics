import React from 'react';

// This is the functional and without jsx elements

const Helo = () =>{
    console.log("this is the helo function");
    return React.createElement(
        'div',null,'Without jsx elements'
    )
}
export default Helo;