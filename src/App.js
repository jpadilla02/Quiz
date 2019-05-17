import React from "react";
import { Router } from "@reach/router";
import "./scss/App.scss";
import Quizzes from "./Quizzes";
import Quiz from "./Quiz";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Quizzes path="/" />
          <Quiz path="/quiz/:id" />
        </Router>
      </div>
    );
  }
}
export default App;
