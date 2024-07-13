# human-timer

Tiny, human readable timer with no external dependencies. Specify the duration in seconds, add callbacks to timer ticks and end, stop it at any moment.

* * *

### Installation:

`npm install --save human-timer`  

Test

`npm run test`  

* * *

### Usage:

```javascript
const timer = new HumanTimer({
    seconds: 7200, // 2 hour long duration
    zeroes: false, // won't turn 5 mins into 05 mins, default is true
    onEnd: () => console.log("END"),
    onTick: () => console.log(timer.hours, timer.minutes, timer.seconds)
});

timer.start();
timer.stop();
timer.restart(60);
```

* * *

### Is there something wrong?

Please tell me!
