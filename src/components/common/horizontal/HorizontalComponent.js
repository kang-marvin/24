import React from "react";

import BlockBuilder from "../shared/BlockBuilder";

const HorizontalComponent = props => {

  const CLASS_NAME = 'horizontal_component'

  const propsObject = {
    showTop:    'false',
    showCenter: 'false',
    showBottom: 'false',
    ...props,
  }

  const HorizontalBasedComponent = props => {
    return (
      <BlockBuilder {...props} className={CLASS_NAME}  />
    )
  }

  const Spacing = _ => {
    return (
      <div className='spacing' />
    )
  }

  return (
    <div className="horizontal-All">
      <HorizontalBasedComponent showPanel={propsObject.showTop} />
      <Spacing />
      <HorizontalBasedComponent showPanel={propsObject.showCenter} />
      <Spacing />
      <HorizontalBasedComponent showPanel={propsObject.showBottom} />
    </div>
  )
}

export default HorizontalComponent;
