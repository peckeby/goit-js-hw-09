import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
console.log(form.elements);

let finalDl = 0;

const createPromise = (delay, step, position) => {
  console.log(position)
  const finalDl = delay + (step*position);
  const finPos = position+1;
  setTimeout(() => {
  new Promise(() => {
    const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
          return Promise.resolve(`✅ Fulfilled promise ${finPos} in ${finalDl}ms`).then(onSuccess =>
            {Notify.success(onSuccess)})
    }
      Promise.reject(`❌ Rejected promise ${finPos} in ${finalDl}ms`).catch(onFailure =>
          {Notify.failure(onFailure)});
    })}, finalDl);
  };

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const delayValue = Number(form.elements[0].value);
  const amountValue = Number(form.elements[2].value);
  const stepI = Number(form.elements[1].value);
  [...Array(amountValue).keys()].forEach(index => createPromise(delayValue, stepI, index))
  })
