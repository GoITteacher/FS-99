const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');

class Timer {
  constructor(tick) {
    this.intervalId = null;
    this.tick = tick;
  }

  start() {
    const init = Date.now();

    this.intervalId = setInterval(() => {
      const diff = init - Date.now();
      const time = this.msToTime(diff);
      this.tick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return { hrs, mins, secs };
  }
}

const timer = new Timer(onTick);

startBtn.addEventListener('click', () => {
  timer.start();
});

stopBtn.addEventListener('click', () => {
  timer.stop();
});

function onTick(time) {
  const str = formatTime(time);
  clockface.textContent = str;
}

function formatTime({ hrs, mins, secs }) {
  hrs = hrs.toString().padStart(2, '0');
  mins = mins.toString().padStart(2, '0');
  secs = secs.toString().padStart(2, '0');

  return `${hrs}:${mins}:${secs}`;
}
