class timerUtils {

  constructor() {
    this.changeInputCount = this.changeInputCount.bind(this);
    this.cleanInputCount = this.cleanInputCount.bind(this);
    this.cleanInputLength = this.cleanInputLength.bind(this);
  }

  decrementCounter(currentCounter) {
    const counterArray = currentCounter
      .split(':')
      .map(count => parseInt(count))

    const secondsCounter = this.changeInputCount(counterArray[2])

    const minutesCounter = secondsCounter === '00'
      ? this.changeInputCount(counterArray[1])
      : this.cleanInputCount(counterArray[1].toString())

    const hoursCounter = minutesCounter === '00'
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
    const stringfyCount = (count-1).toString()
    if (count < 1) {
      return maxCount.toString()
    }
    return stringfyCount
  }

  cleanInputCount = (count, maxCount=60) => {
    if (count == 0 || count == maxCount) {
      return (maxCount - 1).toString()
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
