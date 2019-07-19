import React from "react";
import MyChild from "./components/MyChild";

class App extends React.Component {
  state = {
    number: 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ number: 0 })
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.number !== nextState.number)
      return true
    else
      return false
  }

  onChangeScore = () => {
    this.setState({ number: 1 })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onChangeScore()}>add  new score</button>
        <MyChild number={this.state.number} />
      </div>
    );
  }
}

export default App;
