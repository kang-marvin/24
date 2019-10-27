import React from "react";

import NumberComponent from "../../components/display/NumberComponent";

import timerUtils from "../../utils/timerUtils";

import "../../styles/index.css";

class TwentyFourCounter extends React.Component {

  constructor (props) {
    super(props);

    const today = new Date();
    const timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.state = {
      counter: timeNow,
      counterConfig: {
        defaultMinimumValue: 0,
        defaultMaximumValue: 59,
        hoursMaxLimit: 23,
      }
    }
  }

  componentDidMount() {
    setInterval(() => {
      const currentTimerCount = new timerUtils(this.state.counterConfig).incrementTimer(this.state.counter)
      const nextTimerCount = new timerUtils(this.state.counterConfig).incrementTimer(currentTimerCount.nextCounter)
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
