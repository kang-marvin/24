import React from "react";

const TimerIndicator = props => {

  return (
    <div className='IndicatorPanel'>
      <div style={{ marginTop: '2.0rem' }}>
        <p className='timer_indicator_component' />
        <p className='time-spacing' />
        <p className='timer_indicator_component' />
      </div>
    </div>
  )
}

export default TimerIndicator;
