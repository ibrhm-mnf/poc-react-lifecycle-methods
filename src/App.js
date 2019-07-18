import React from "react";
import MyChild from "./MyChild";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "nived"
    };
    console.log("this is contructor");
  }

  static getDerivedStateFromProps() {
    console.log("this is getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("this is componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("this is shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("this is getSnapshotBeforeUpdate");
    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("this is componentDidUpdate");
  }

  onClickButton() {
    this.setState({ name: "hashir" });
  }

  renderChild = () => {
    return <h2>Child</h2>;
  };

  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={() => this.onClickButton()}>hit me</button>
        <h1>Parent</h1>
        <MyChild />
      </div>
    );
  }
}

export default App;
