import React from "react";
import MyChild from "./components/MyChild";

class App extends React.Component {
  state = {
    number: 0
  }

  onChangeScore = () => {
    this.setState({ number: 1 })
  }

  changeScoreFromchild = () => {
    this.setState({ number: 2 })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onChangeScore()}>add new score</button>
        <MyChild
          number={this.state.number}
          changeScoreFromchild={this.changeScoreFromchild} />
      </div>
    );
  }
}

export default App;
