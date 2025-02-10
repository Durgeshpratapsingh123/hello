import React,{Component} from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state= {
            count: 0
        }
    }
    increment(){

        // this increments the value of count by 100 but the value of count is not updated in the console.log also when it is called as this.incrementFive() it gives the wrong value of count

        // this.setState({
        //     count: this.state.count + 100
        // },() => {console.log('Callback value', this.state.count);
        // })

        // this gives the correct value of count

        this.setState((prevState) =>({
            count: prevState.count + 100
        }))
        console.log(this.state.count);
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <div>
                <h1>Account Balance = RS. {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Add Rs.100</button> 
            </div>
        )
    }
}

export default Counter