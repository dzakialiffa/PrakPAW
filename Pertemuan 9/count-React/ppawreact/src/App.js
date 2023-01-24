import './App.css';
import React from "react";
class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {count: 0} //Ini const
}

  render() {
    return (
      <div>
        <h1> {this.state.count}</h1>
        <button onClick={() => this.setState ({ count : this.state.count - 1 })}> Kurangi </button>
        <button onClick={() => this.setState ({ count : this.state.count + 1 })}> Tambahin </button>
      </div>
    );
  }
}

export default App;