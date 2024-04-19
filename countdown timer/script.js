const newYear = '1 Jan 2025';
const secondsEl = document.getElementById('seconds')
const minutesEl = document.getElementById('minutes')
const hoursEl = document.getElementById('hours')
const daysEl = document.getElementById('days')


function countdown(){
  const newYearDate = new Date(newYear)
  const currentDate = new Date()
  const newYearEl = (newYearDate - currentDate);

  const seconds = Math.floor((newYearEl / 1000) % 60);
  const minutes = Math.floor((newYearEl / 60000) % 60);
  const hours = Math.floor((newYearEl / 3600000) % 24);
  const days = Math.floor(newYearEl / 86400000);

  secondsEl.textContent = formatTime(seconds);
  minutesEl.textContent = formatTime(minutes);
  hoursEl.textContent = formatTime(hours);
  daysEl.textContent = formatTime(days);

}

function formatTime(time){
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown,1000);

