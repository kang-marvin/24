import React from "react";

import HorizontalComponent from "../../components/common/horizontal/HorizontalComponent";
import VerticalComponent from "../../components/common/vertical/VerticalComponent";

import extractorutils from "../../utils/extractorUtils";

import { numberBuildingBlocks } from "../../data/numberBuildingBlocks";

const NumberComponent = props => {

  const propsObject = { counter: '0', ...props }
  const numberArray = extractorutils.onlyNumbers(propsObject.counter);

  const defaultNumberBuildingBlocks = {
    right: {},
    left: {},
    center: {},
  }

  return (
    <div style= {{ display: 'inline-flex' }}>
      {Object.values(numberArray)
        .filter(counter => numberBuildingBlocks[counter] !== undefined)
        .map(counter => {
          const numberBuilderBlocks = numberBuildingBlocks[counter] || defaultNumberBuildingBlocks;
          return(
            <div className="numberPanel">
              <VerticalComponent
                { ...numberBuilderBlocks['left'] }
              />
              <HorizontalComponent
                { ...numberBuilderBlocks['center'] }
              />
              <VerticalComponent
                { ...numberBuilderBlocks['right'] }
              />
            </div>
          )
      })}
    </div>
  )
}

export default NumberComponent;
