class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  // ... your code goes here

  start(printTimeCallback) {
    this.currentTime = 0;

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback !== undefined) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    // .. your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
  
    if (`${value}`.length == 2) {
      return `${value}`;
    } else {
      return `0${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId)

    
    // ... your code goes here
  }

  reset() {
    this.currentTime=0
   // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
