import React,{Component} from 'react';

class Welcome extends Component{
    render(){
        return <h1>Class Component of {this.props.topic} and {this.props.subtopic}</h1>
        // console.log(this.props);
        
    }
}

export default Welcome;