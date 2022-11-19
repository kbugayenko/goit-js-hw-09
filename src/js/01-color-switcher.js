const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

refs.btnStart.addEventListener('click', onStart);
refs.btnStop.addEventListener('click', onStop);

let interval = null;

function onStart() {
  refs.btnStart.disabled = true;
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  refs.btnStart.disabled = false;
  clearInterval(interval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
