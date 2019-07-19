import React from "react";
import MyChild from "./MyChild";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "parent"
    };
    console.log("this is contructor", props);
  }

  static getDerivedStateFromProps(state, props) {
    console.log("this is getDerivedStateFromProps", state, props);
    return null;
  }

  componentDidMount() {
    console.log("this is componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("this is shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("this is getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("this is componentDidUpdate", prevProps, prevState);
  }

  onClickButton() {
    this.setState({ name: "updated parent" });
  }

  render() {
    console.log("this is render", this.props, this.state);
    return (
      <div>
        <button onClick={() => this.onClickButton()}>hit me</button>
        <MyChild name={this.state.name} />
      </div>
    );
  }
}

export default App;
