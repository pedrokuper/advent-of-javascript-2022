const INTERVAL_SECONDS = 50;

const BUTTON = document.getElementById("start-btn");
const MINUTES = document.getElementById("minutes");
const SECONDS = document.getElementById("seconds");
const SETTINGS = document.getElementById("settings");
const RING = document.getElementById("ring");

SETTINGS.addEventListener("click", setTime);
BUTTON.addEventListener("click", toggle);

//GLOBAL VARIABLES

function setTime() {
  let time;
  do {
    time = prompt("Defina el tiempo en minutos: Ej: 10. Solo use números");
  } while (isNaN(parseInt(time)));

  return parseInt(time);
}

let interval;

function startTimer(seconds, minutes) {
  interval = setInterval(() => {
    seconds--;

    if (seconds == 0 && minutes > -1) {
      minutes--;
      seconds = 59;
    }
    MINUTES.value = minutes > 10 ? minutes : `0${minutes}`;
    SECONDS.value = seconds > 10 ? seconds : `0${seconds}`;
    if (minutes < 0) {
      clearInterval(interval);

      MINUTES.value = `0${0}`;
      SECONDS.value = `0${0}`;
      RING.style.stroke = "red";
      setTimeout(() => {
        alert("Time Finished");
      }, 1);
    }

    console.log(minutes + ":" + seconds);
  }, INTERVAL_SECONDS);
}

//TOGGLE
let toggleBtn = false;

function toggle() {
  let seconds = 60;
  let minutes;
  toggleBtn = !toggleBtn;

  if (toggleBtn) {
    minutes = setTime() - 1;
    startTimer(seconds, minutes);
  } else {
    clearInterval(interval);
  }
}
