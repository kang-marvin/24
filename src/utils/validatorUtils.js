class validatorUtils {
  static visibilityStatus(inputObject) {
    const props = { showPanel: 'true', ...inputObject}
    const result = props.showPanel === 'false'
      ? 'hidden'
      : 'visible'

    return result;
  }
}

export default validatorUtils;
