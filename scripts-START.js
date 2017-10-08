const endtime = document.querySelector('.display__end-time');
const counter = document.querySelector('.display__time-left');
let timeout = null;

function twoDigit(num) {
  return ('0' + num).slice(-2);
}
function countdown(timesec) {
  clearTimeout(timeout);
  let min = Math.floor(timesec / 60);
  let hour = Math.floor(min / 60);
  let sec = timesec % 60;
  min = min % 60;

  counter.innerHTML = (hour ? (hour + ':') : '') + twoDigit(min) + ':' + twoDigit(sec);
  if(timesec > 0) {
    timeout = setTimeout(countdown, 1000, timesec-1);
  }
}

function startCountdown(timesec) {
  const current = new Date();
  current.setSeconds(current.getSeconds() + timesec);
  endtime.innerHTML = `I will be back at ${current.getHours()}:${twoDigit(current.getMinutes())}`;
  countdown(timesec);
}


document.querySelectorAll('.timer__button').forEach(btn => btn.addEventListener('click', () => startCountdown(parseInt(btn.dataset.time))));
document.querySelector('#custom').addEventListener('submit', function(e) {
  e.preventDefault();
  const minutes = parseInt(this.querySelector('input').value);
  startCountdown(minutes * 60);
  this.reset();
});