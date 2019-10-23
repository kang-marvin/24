import React from "react";

import NumberComponent from "../../components/display/NumberComponent";

import "../../styles/index.css";
class TwentyFourCounter extends React.Component {

  render() {
    return (
      <div className="-card">
        <div className="card-body">
          <NumberComponent counter='0123456789' />
        </div>
      </div>
    );
  }
}

export default TwentyFourCounter;