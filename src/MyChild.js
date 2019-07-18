import React, { Component } from "react";

export default class MyChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "nived"
    };
    console.log("************ this is child contructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("************ this is child getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("************ this is child componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("************ this is child shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("************ this is child getSnapshotBeforeUpdate");
    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("************ this is child componentDidUpdate");
  }

  render() {
    console.log("************ this is child render");
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
