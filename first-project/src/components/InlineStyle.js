import React from 'react'

function InlineStyle() {
    const style = {
        fontSize : "50px",
        color :"blue"
    }
    return (
        <div>
            <h1 style={style}>Inline styling</h1>
        </div>
    )
}

export default InlineStyle
