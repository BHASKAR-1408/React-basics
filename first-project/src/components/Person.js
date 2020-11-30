import React from 'react'

// this is child component to render the array which is located in parent component

function Person({person}) {
    return (
        <div>
            <ul>
                <li>
                my goal is {person.name}
                </li>
            </ul>
        </div>
    )
}

export default Person
