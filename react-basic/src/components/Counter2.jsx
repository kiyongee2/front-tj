import { Component } from "react";

class Counter extends Component{
  constructor(props){
    super(props);
    //state 초기값 설정
    this.state = {number: 0}
  }
  render(){
    const {number} = this.state;
    return(
      <div className="counter">
        <h1>{number}</h1>
        <button onClick={() => {
          this.setState({number: number + 1});
        }}> 
        +1
        </button>
        <button onClick={() => {
          this.setState({number: number - 1});
        }}> 
        -1
        </button>
      </div>
    )
  }
}

export default Counter;

