import React from "react";

import NumberComponent from "../../components/display/NumberComponent";

import timerUtils from "../../utils/timerUtils";

import "../../styles/index.css";

class TwentyFourCounter extends React.Component {

  constructor (props) {
    super(props);

    const today = new Date();
    const timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    /**
     * If you want to have more fun, set timeNow to equal `88:88:88`,
     * then change hoursMaxLimit and defaultMaximumValue to be `87`,
     * and convert from `*increment*` to `*decrement*`. Enjoy
     */
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
    /**
     * Change from increment to decrement to see how the counter goes up and down.
     *
     * Also, If you wish to change the counter values, modify the default min and max.
     * (*For hours value, you need to change the code on file `timerUtils` where value 24 is located*)
     *
     * I know you are smiling, so am I :)
     */
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
