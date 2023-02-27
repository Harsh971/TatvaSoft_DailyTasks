import React from 'react'

class Counter extends React.Component {
    constructor() {
        super() 
        this.state = {
           count : 0
        }
    }
    Increment() {
        this.setState({
            count:this.state.count + 1
        })
    }
    render() {
        return (
            <>
            <div>count -  {this.state.count}</div>
                <button onClick={() => this.Increment()}>Increment</button>
                          
            </>
        );
    }
}
export default Counter
