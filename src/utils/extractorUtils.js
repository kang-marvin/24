class extractorUtils {
  static onlyNumbers(inputObject) {
    const result =
      inputObject.split('').filter(char => char >= '0' && char <= '9');
    return result;
  }
}

export default extractorUtils;
