import React from "react";
import { Link } from "@reach/router";
import Quiz from "./Quiz";

class Quizzes extends React.Component {
  render() {
    return (
      <div className="quizzes">
        <h1>All Quiz Options</h1>
        <ul className="quizzes__list">
          <li className="quizzes__list--item">
            <Link to="/quiz/28">
              <h2>Automotive Quiz</h2>
              <button>Take Quiz</button>
            </Link>
          </li>

          <li className="quizzes__list--item">
            <Link to="/quiz/9">
              <h2>General Knowledge Quiz</h2>
              <button>Take Quiz</button>
            </Link>
          </li>

          <li className="quizzes__list--item">
            <Link to="/quiz/11">
              <h2>Entertainment Film Quiz</h2>
              <button>Take Quiz</button>
            </Link>
          </li>

          <li className="quizzes__list--item">
            <Link to="/quiz/12">
              <h2>Entertainment Music Quiz</h2>
              <button>Take Quiz</button>
            </Link>
          </li>

          <li className="quizzes__list--item">
            <Link to="/quiz/21">
              <h2>Sports Quiz</h2>
              <button>Take Quiz</button>
            </Link>
          </li>

          <li className="quizzes__list--item">
            <Link to="/quiz/15">
              <h2>Video Games Quiz</h2>
              <button>Take Quiz</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Quizzes;
