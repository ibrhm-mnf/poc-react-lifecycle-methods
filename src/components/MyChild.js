import React, { Component } from "react";

export default class MyChild extends Component {

  onChangeScore() {
    this.props.changeScoreFromchild();
  }

  render() {
    let { number } = this.props;
    console.log(number)
    return (
      <div>
        <button onClick={() => this.onChangeScore()}>change score from child</button>
        {number}
      </div>
    );
  }
}
