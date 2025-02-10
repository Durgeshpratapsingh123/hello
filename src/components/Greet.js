import React from 'react';


// function Greet() {
//     return <h1>Dps</h1>
// }

//arrowfunction
const Greet = (props) =>{
    console.log(props);
    
    return(
        <div>
            <h1>Hello {props.name} has height {props.height} </h1>
            {props.children}
        </div>
    )
} 

export default Greet;