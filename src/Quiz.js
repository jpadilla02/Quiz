import React from "react";
import Question from "./Question";
import { getQuestions } from "./lib/Api";
import Results from "./Results";
import Timer from "./Timer";

let totalSeconds = 0;
let seconds = "";
let minutes = "";
let interval = "";
class Quiz extends React.Component {
  state = {
    questions: [],
    index: 0,
    wrong: 0,
    right: 0,
    answered_questions: [],
    time: ""
  };

  handleNextQuestion = () => {
    const selected_answer = document.querySelector("input:checked");
    this.checkAnswer(selected_answer.value, this.state.index);

    if (this.state.index === 9) {
      this.setState({
        startTimer: false,
        time: minutes.innerText + ":" + seconds.innerText
      });
      this.stopTimer();
    }
  };

  handlePreviousQuestion = () => {
    this.setState({ index: this.state.index - 1 });
  };

  checkAnswer = (answer, index) => {
    const correct_answer = this.state.questions[index].correct_answer;
    let answered_questions = [...this.state.questions];
    if (answer) {
      if (answer !== correct_answer) {
        answered_questions[index]["correct"] = false;
        answered_questions[index]["selected_answer"] = answer;
        this.setState({ wrong: this.state.wrong + 1 });
      } else {
        answered_questions[index]["correct"] = true;
        answered_questions[index]["selected_answer"] = answer;
        this.setState({ right: this.state.right + 1 });
      }
      this.setState({ index: this.state.index + 1 });
    } else {
      return;
    }

    if (index === 9) {
      this.setState({ answered_questions });
    }
  };

  pad = val => {
    const stringVal = val + "";
    if (stringVal.length < 2) {
      return "0" + stringVal;
    } else {
      return stringVal;
    }
  };

  setTime = () => {
    ++totalSeconds;
    seconds.innerHTML = this.pad(totalSeconds % 60);
    minutes.innerHTML = this.pad(parseInt(totalSeconds / 60));
  };

  startTimer = () => {
    interval = setInterval(this.setTime, 1000);
  };

  stopTimer = () => {
    clearInterval(interval);
  };

  componentDidMount() {
    seconds = document.querySelector("#seconds");
    minutes = document.querySelector("#minutes");
    totalSeconds = 0;
    getQuestions(this.props.id).then(data =>
      this.setState({ questions: data.results })
    );

    this.stopTimer();
    this.startTimer();
  }

  render() {
    return (
      <div className="quiz__wrapper">
        {this.state.index < 10 ? (
          <React.Fragment>
            <ul className="quiz__questions">
              {this.state.questions.map((question, index) => {
                return index === this.state.index ? (
                  <Question
                    key={index}
                    question={question.question}
                    wrong_answers={question.incorrect_answers}
                    correct_answer={question.correct_answer}
                  />
                ) : (
                  ""
                );
              })}
            </ul>
            <Timer />
          </React.Fragment>
        ) : (
          ""
        )}

        {this.state.questions.length - 1 > this.state.index ? (
          <button className="next" onClick={this.handleNextQuestion}>
            Next
          </button>
        ) : (
          ""
        )}

        {this.state.questions.length - 1 === this.state.index ? (
          <button
            type="submit"
            className="next"
            onClick={this.handleNextQuestion}
          >
            Finish
          </button>
        ) : (
          ""
        )}
        {this.state.index === 10 ? (
          <Results
            answered_questions={this.state.answered_questions}
            correct_answers={this.state.right}
            wrong_answers={this.state.wrong}
            time={this.state.time}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Quiz;
