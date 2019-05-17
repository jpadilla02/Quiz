import React from "react";

class Score extends React.Component {
  render() {
    return (
      <div className={`quiz__results--${this.props.type}`}>
        <h2>{this.props.title}</h2>
        <span>{this.props.score}</span>
      </div>
    );
  }
}

export default Score;
