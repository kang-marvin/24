import React from "react";

import NumberComponent from "../../components/display/NumberComponent";

import timerUtils from "../../utils/timerUtils";

import "../../styles/index.css";

class TwentyFourCounter extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      counter: '24:00:00'
    }
  }

  componentDidMount() {
    setInterval(() => {
      const currentTimerCount = new timerUtils().decrementCounter(this.state.counter)
      const nextTimerCount = new timerUtils().decrementCounter(currentTimerCount.nextCounter)
      this.setState({counter: nextTimerCount.currentCounter})
    }, 1000);
  }

  render() {
    return (
      <div className="-card">
        <div className="card-body">
          <NumberComponent
            counter={ this.state.counter } />
        </div>
      </div>
    );
  }
}

export default TwentyFourCounter;
