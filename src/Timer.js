import React from "react";

class Timer extends React.Component {
  render() {
    return (
      <div className="quiz__timer">
        <span id="minutes">00</span>:<span id="seconds">00</span>
      </div>
    );
  }
}
export default Timer;
