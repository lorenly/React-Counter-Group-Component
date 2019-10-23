import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {number: 0};
    }
  render(){
    return(
        <div className="Number">
            <header className="Number-header">
                <button onClick = { () =>
                    {this.setState({number: this.state.number+1})}}>
                    +
                </button>
                <span>{this.state.number}</span>
                <button onClick = { () =>
                    {this.setState({number: this.state.number-1})}}>
                    -
                </button>
                
            </header>
        </div>
    );
  }
}

export default Counter;