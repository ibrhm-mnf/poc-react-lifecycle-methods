import React, { Component } from "react";

export default class MyChild extends Component {
  render() {
    let { number } = this.props;
    console.log(number)
    return (
      <div>
        {number}
      </div>
    );
  }
}
