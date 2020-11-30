import React from 'react'
import '../cssStyles/styleSheet.css'

function Stylesheet(props) {

    // //  conditional styling of any element

    let className = props.className?"primary":""
    return (

        /* this is for multiple classes we used in stylesheets with templete literals */
         
        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
