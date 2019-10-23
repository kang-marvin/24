import React from "react";

import BlockBuilder from "../shared/BlockBuilder";

const VerticalComponent = props => {

  const CLASS_NAME = 'vertical_component'

  const propsObject = {
    showTop:    'false',
    showBottom: 'false',
    ...props,
  }

  const VerticalBasedComponent = props => {
    return (
      <BlockBuilder {...props} className={CLASS_NAME}  />
    )
  }

  return (
    <div className="vertical-All">
      <VerticalBasedComponent showPanel={propsObject.showTop} />
      <VerticalBasedComponent showPanel={propsObject.showBottom} />
    </div>
  )
}

export default VerticalComponent;
