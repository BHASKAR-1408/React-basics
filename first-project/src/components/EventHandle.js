import React from 'react';

function EventHandle() {
   function clickHandle(){
        console.log("consoling successfully");
    }
    return (
        <div>
            <button onClick={clickHandle}>click</button>
        </div>
    )
}

export default EventHandle
