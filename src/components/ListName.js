import React from "react";
import Person from "./Person";

function ListName() {
    // Array of objects
    const persons = [
        {
            id:1,
            name : 'dps',
            age : 30,
            skill : 'react'
        },
        {
            id:2,
            name : 'dps1',
            age : 29,
            skill : 'angular'
        },
        {
            id:3,
            name : 'dps3',
            age : 28,
            skill : 'nodejs'
        },
        {
            id:4,
            name : 'dps4',
            age : 27,
            skill : 'expressjs'
        },
        {
            id:5,
            name : 'dps5',
            age : 26,
            skill : 'nextjs'
        }      
    ]

//   const names = ["dps", "dps1", "dps2"];
//   const nameList = names.map((name) => <h2>{name}</h2>);

// made a new component Person.js for reusability of code and used it here person is a prop
// added key prop to remove warning
  const personList = persons.map((person) => <Person key={person.id} person={person} />);
  return <div>{personList}</div>;
}

export default ListName;
