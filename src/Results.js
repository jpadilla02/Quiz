import React from "react";
import Score from "./Score";
import ResultQuestions from "./ResultQuestions";
import { Link } from "@reach/router";

class Results extends React.Component {
  render() {
    return (
      <div className="quiz__results">
        <div className="quiz__results--score">
          <h2>
            {this.props.correct_answers > 5 ? "You Passed" : "You Failed"}
          </h2>
          <Score
            type="correct"
            title="Correct Answers:"
            score={this.props.correct_answers}
          />
          <Score
            type="wrong"
            title="Wrong Answers:"
            score={this.props.wrong_answers}
          />

          <div className="quiz__results--time">
            <h2>Time:</h2>
            <span>{this.props.time}</span>
          </div>
        </div>
        <div className="quiz__results--questions">
          <ul className="quiz__questions">
            {this.props.answered_questions.length > 0
              ? this.props.answered_questions.map((question, index) => (
                  <ResultQuestions
                    key={index}
                    liClass={question.correct ? "correct" : "incorrect"}
                    wrong_answers={question.incorrect_answers}
                    correct_answer={question.correct_answer}
                    question={question.question}
                    selected_answer={question.selected_answer}
                  />
                ))
              : ""}
          </ul>
        </div>
        <Link to="/" className="back">
          Take Another Quiz
        </Link>
      </div>
    );
  }
}

export default Results;
