const INTERVAL_SECONDS = 200;

const BUTTON = document.getElementById("start-btn");
const MINUTES = document.getElementById("minutes");
const SECONDS = document.getElementById("seconds");
const SETTINGS = document.getElementById("settings");
const RING = document.getElementById("ring");

SETTINGS.addEventListener("click", setTime);
BUTTON.addEventListener("click", toggle);

let GLOBAL_TIME = 15;

function setTime() {
  let time;
  do {
    time = prompt("Defina el tiempo en minutos: Ej: 10. Solo use números");
  } while (isNaN(parseInt(time)));
  GLOBAL_TIME = parseInt(time);

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
    MINUTES.value = minutes >= 10 ? minutes : `0${minutes}`;
    SECONDS.value = seconds >= 10 ? seconds : `0${seconds}`;
    if (minutes < 0) {
      clearInterval(interval);

      MINUTES.value = `0${0}`;
      SECONDS.value = `0${0}`;
      RING.style.stroke = "red";
      setTimeout(() => {
        alert("Tiempo terminado!");
        RING.style.stroke = "#09a65a";
      }, 1);
    }
  }, INTERVAL_SECONDS);
}

//TOGGLE
let toggleBtn = false;

function toggle() {
  let seconds = 60;
  let minutes;
  toggleBtn = !toggleBtn;

  if (toggleBtn) {
    minutes = GLOBAL_TIME - 1 ?? setTime() - 1;

    startTimer(seconds, minutes);
  } else {
    MINUTES.value = GLOBAL_TIME;
    SECONDS.value = `0${0}`;
    clearInterval(interval);
  }
}
