import React, {Component} from 'react';

class DemonStateClass extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
}
incrementCount = () => {
    this.setState({count: this.state.count +1});
}

render(){
    return(
        <div>
            <p>Hello! Count: {this.state.count}</p>
            <button onClick={this.incrementCount}>Increment Count (Class)</button>
        </div>
    );
}
}

export default DemonStateClass;
