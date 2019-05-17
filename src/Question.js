import React from "react";
import Choice from "./Choice";

class Question extends React.Component {
  state = {
    answers: this.props.wrong_answers
  };

  decodeHTML = html => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  mergeAllAnswers = answers => {
    const all_answers = [...this.props.wrong_answers];
    all_answers.push(this.props.correct_answer);
    this.setState({ answers: all_answers });
  };

  componentDidMount() {
    this.mergeAllAnswers();
  }

  // componentWillReceiveProps(props) {
  //   console.log(props);
  // }
  render() {
    return (
      <li>
        <h2>{this.decodeHTML(this.props.question)}</h2>
        <div className="quiz__choices">
          {this.shuffle(this.state.answers).map((answer, index) => (
            <Choice key={index} answer={answer} />
          ))}
        </div>
      </li>
    );
  }
}

export default Question;
