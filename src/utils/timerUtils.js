class timerUtils {

  constructor() {
    this.changeInputCount = this.changeInputCount.bind(this);
    this.cleanInputCount = this.cleanInputCount.bind(this);
    this.cleanInputLength = this.cleanInputLength.bind(this);
  }

  incrementCounter(currentCounter) {
    const counterArray = currentCounter
      .split(':')
      .map(count => parseInt(count))

    const secondsCounter = this.changeInputCount(counterArray[2])

    const minutesCounter = secondsCounter === '59'
      ? this.changeInputCount(counterArray[1])
      : this.cleanInputCount(counterArray[1].toString())

    const hoursCounter = minutesCounter === '59'
      ? this.changeInputCount(counterArray[0], 24)
      : this.cleanInputCount(counterArray[0].toString(), 24)

    const nextCounter =
      this.cleanInputLength(hoursCounter).
        concat(
          ':', this.cleanInputLength(minutesCounter),
          ':', this.cleanInputLength(secondsCounter)
        )

    return {currentCounter: currentCounter, nextCounter: nextCounter}
  }

  changeInputCount = (count, maxCount=59) => {
    const stringfyCount = (count + 1).toString()
    if (count < 0) {
      return maxCount.toString()
    } else if ((count + 1) > maxCount) {
      return '00'
    } else if (stringfyCount.length === 1) {
      return ('0'.concat(stringfyCount))
    } else {
      return stringfyCount
    }
  }

  cleanInputCount = (count, maxCount= 60) => {
    if (count < 0) {
      return (count + 1).toString()
    } else if (count >= maxCount) {
      return '0'
    } else {
      return count
    }
  }

  cleanInputLength = stringfyCount => {
    if (stringfyCount.length < 2){
      return '0' + stringfyCount;
    } else {
      return stringfyCount;
    }
  }
}

export default timerUtils;
