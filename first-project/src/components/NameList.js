import React from 'react'
import Person from './Person.js'


function NameList() {

    // //  list rendering with repeated elements with key prop using indexing
    // const list = ["bhaskar","vaishnavi","software developer","vaishnavi"]
    // const namelist = list.map((item , index) => <h2 key={index}>{item}</h2>)

    // object rendering

    let persons = [
        {
            name:"boss",
            motive:"To became a millianiar",
            goal:"to settled in america"
        },
        {
            name:"robine",
            motive:"to do liked things",
            goal:"to settled in america"
        },
        {
            name:"bhaskar",
            motive:"A responsible human being",
            goal:"to settled in america"
        }
    ]
                 
     const details = persons.map(item=>(<Person key={item.name} person={item} />)) 


    return (
        <div>
            {
                details
            }
        </div>

    )
}

export default NameList
