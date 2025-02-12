import React from 'react'

//  Always try to make new component for reusability of code.
function Person({person}) {
  return (
    <div>
      <h2>I am {person.name},My age is {person.age}, my id is {person.id} ,I know {person.skill}</h2>
    </div>
  )
}

export default Person
