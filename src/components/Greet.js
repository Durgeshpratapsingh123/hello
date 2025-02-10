import React from 'react';


// function Greet() {
//     return <h1>Dps</h1>
// }

//arrowfunction
// const Greet = (props) =>{
//     // console.log(props);
//     return(
//         <div>
//             <h1>Hello {props.name} has height {props.height} </h1>
//             {props.children}
//         </div>
//     )
// } 

// destructuring props in the function parameter
// const Greet = ({name,height,children}) =>{
//     // console.log(props);
//     return(
//         <div>
//             <h1>Hello {name} has height {height} </h1>
//             {children}
//         </div>
//     )
// } 

// destructuring props in the function body
const Greet = (props) =>{
    // console.log(props);
    const {name,height,children} = props
    return(
        <div>
            <h1>Hello {name} has height {height} </h1>
            {children}
        </div>
    )
} 

export default Greet;