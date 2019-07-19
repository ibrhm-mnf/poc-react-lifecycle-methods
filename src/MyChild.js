import React, { Component } from "react";

export default class MyChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "child"
    };
    console.log("************ this is child contructor", props);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("************ this is child getDerivedStateFromProps", props, state);
    return null;
  }

  componentDidMount() {
    console.log("************ this is child componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("************ this is child shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("************ this is child getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("************ this is child componentDidUpdate", prevProps, prevState);
  }

  render() {
    console.log("************ this is child render", this.props, this.state);
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
