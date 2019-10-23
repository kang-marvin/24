import React from "react";

import validatorUtils from "../../../utils/validatorUtils";

const BlockBuilder = props => {
  const panelVisibilityStatus = validatorUtils.visibilityStatus(props);
  return (
    <>
      <p
        className={ props.className }
        style={ { visibility: panelVisibilityStatus } }
      />
    </>
  )
}

export default BlockBuilder;
