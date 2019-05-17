import React from "react";

class Choice extends React.Component {
  render() {
    return (
      <div className="quiz__choice">
        <input
          type="radio"
          name="choice"
          id={this.props.answer}
          value={this.props.answer}
        />
        <label htmlFor={this.props.answer}>{this.props.answer}</label>
      </div>
    );
  }
}

export default Choice;
