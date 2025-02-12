import React,{Component} from 'react';

// class Welcome extends Component{
//     render(){
//         return <h1>Class Component of {this.props.topic} and {this.props.subtopic}</h1>
//         // console.log(this.props);     
//     }
// }

// destructuring props in the class body

class Welcome extends Component{
    
    render(){
        const {topic,subtopic} = this.props
        // const {state1,state2} = this.state
        return <h1>Class Component of {topic} and {subtopic}</h1>
        // console.log(this.props);
        
    }
}

export default Welcome;