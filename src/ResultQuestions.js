import React from "react";

class ResultQuestions extends React.Component {
  render() {
    return (
      <li className={this.props.liClass}>
        <h3>{this.props.question}</h3>
        <div className="quiz__choices">
          {this.props.wrong_answers.map(answer => (
            <div
              key={answer}
              className={
                (answer === this.props.selected_answer ? "wrong_answer" : "") +
                " quiz__choice"
              }
            >
              <input
                type="radio"
                id={answer}
                value={answer}
                disabled="disabled"
                checked={answer === this.props.selected_answer ? "checked" : ""}
              />
              <label htmlFor={answer}>{answer}</label>
            </div>
          ))}
          <div className="quiz__choice correct_answer">
            <input
              type="radio"
              id={this.props.correct_answer}
              value={this.props.correct_answer}
              disabled="disabled"
              checked="checked"
            />
            <label htmlFor={this.props.correct_answer}>
              {" "}
              {this.props.correct_answer}{" "}
            </label>
          </div>
        </div>
      </li>
    );
  }
}

export default ResultQuestions;
