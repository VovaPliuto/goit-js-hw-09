let timeId = 0;

const refs = {
  startBtn: document.querySelector("[data-start]"),
  stopBtn: document.querySelector("[data-stop]"),
}

refs.stopBtn.setAttribute('disabled', '');

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.stopBtn.addEventListener("click", onStopBtnClick);

function onStartBtnClick(e) {
  refs.startBtn.setAttribute("disabled", "");
  refs.stopBtn.removeAttribute("disabled");
  timeId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick(e) {
  clearInterval(timeId);
   refs.stopBtn.setAttribute('disabled', '');
   refs.startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

