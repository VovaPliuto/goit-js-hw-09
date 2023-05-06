import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
};
let positionCounter = 1;

refs.formEl.addEventListener('submit', onClickSubmit);

function onClickSubmit(e) {
  e.preventDefault();
  let firstDelay = Number(refs.formEl.delay.value);
  const step = Number(refs.formEl.step.value);
  const amount = Number(refs.formEl.amount.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(positionCounter, firstDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    firstDelay += step;
    positionCounter += 1;
  }
  positionCounter = 1;
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
