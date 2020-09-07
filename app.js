//Set HTML
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

//Date that Ready Player Two launches
const bookLaunch = "24 Nov 2020";

//Countdown function
function countdown() {
  const bookLaunchDate = new Date(bookLaunch);
  const currentDate = new Date();
  const totalSeconds = (bookLaunchDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  //console.log(totalSeconds, days, hours, minutes, seconds);
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

//Formatting time with a zero
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//Intial Call
countdown();

//Set interval
setInterval(countdown, 1000);
