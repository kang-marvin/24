
class timerUtils {

  constructor({ defaultMinimumValue=0, defaultMaximumValue=59 }) {
    this.defaultMinimumValue = defaultMinimumValue;
    this.defaultMaximumValue = defaultMaximumValue;

    this.incrementTimer = this.incrementTimer.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
  }

  incrementTimer(currentTimerCount=0) {
    const pointOfChange = '00'
    const increaseByOneCount = value => (value + 1)
    const nextTimerCountObject = this.changeCounter(
      currentTimerCount, pointOfChange, increaseByOneCount
    )

    const nextTimerCount =
      nextTimerCountObject.hoursCounter +
      ':' + nextTimerCountObject.minutesCounter +
      ':' + nextTimerCountObject.secondsCounter

    return {currentCounter: currentTimerCount, nextCounter: nextTimerCount}
  }

  decrementTimer(currentTimerCount=0) {
    const pointOfChange = '00'
    const decreaseByOneCount = value => (value - 1)
    const nextTimerCountObject = this.changeCounter(
      currentTimerCount, pointOfChange, decreaseByOneCount
    )

    const nextTimerCount =
      nextTimerCountObject.hoursCounter +
      ':' + nextTimerCountObject.minutesCounter +
      ':' + nextTimerCountObject.secondsCounter

    return {currentCounter: currentTimerCount, nextCounter: nextTimerCount}
  }

  changeCounter(currentCounter, pointOfChange, arithmeticAction) {
    const counterArray = currentCounter
      .split(':')
      .map(count => parseInt(count))

      const secondsCounter = this.cleanMinToMaxRange(
        arithmeticAction(counterArray[2])
      )

      // eslint-disable-next-line
      const minutesCounter = secondsCounter == pointOfChange
        ? this.cleanMinToMaxRange( arithmeticAction(counterArray[1]) )
        : (counterArray[1])

      const hoursCounter =
        // eslint-disable-next-line
        (minutesCounter == pointOfChange && secondsCounter == pointOfChange)
          ? this.cleanMinToMaxRange((arithmeticAction(counterArray[0]), 0, 23))
          : (counterArray[0])

      return {
        currentCounter: currentCounter,
        secondsCounter: this.cleanInputLength(secondsCounter),
        minutesCounter: this.cleanInputLength(minutesCounter),
        hoursCounter: this.cleanInputLength(hoursCounter)
      }

  }

  cleanMinToMaxRange(
    currentCount,
    defaultMinimumValue=this.defaultMinimumValue,
    defaultMaximumValue=this.defaultMaximumValue,
  ) {
    if (currentCount < defaultMinimumValue) {
      return defaultMaximumValue
    } else if (currentCount > defaultMaximumValue) {
      return defaultMinimumValue
    } else {
      return currentCount
    }
  }

  cleanInputLength(stringfyCount) {
    if (stringfyCount.toString().length < 2){
      return '0' + stringfyCount;
    } else {
      return stringfyCount.toString();
    }
  }

}

export default timerUtils;
