import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('form');
const delayInput = form.elements[0];
const stepInput = form.elements[1];
const amountInput = form.elements[2];

let delayValue = null;
let amountValue = null;
let step = null;

let finalDl = 0;


amountInput.addEventListener ('blur', () => {
  amountValue = Number(amountInput.value);
  return amountValue;
})

stepInput.addEventListener ('blur', () => {
    step = Number(stepInput.value);
    return step;
})

delayInput.addEventListener ('blur', () => {
    delayValue = Number(delayInput.value);
    return delayValue;
})


const calculateDelay = (dl, st, x) => {
  if(x === 1){
    finalDl = dl
  } else if (x === 2) {
    finalDl = dl + st}
    else {
      finalDl = dl + st*(x-1)
    }
      };

const createPromise = (position, delay, step) => {
  for (let i = 1; i <= position; i+=1) {
    calculateDelay(delay, step, i);
    setTimeout(() => {
    calculateDelay(delay, step, i);
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      return Promise.resolve(`✅ Fulfilled promise ${i} in ${finalDl}ms`)
      .then(onSuccess =>
        {Notify.success(onSuccess);});
    }
    Promise.reject(`❌ Rejected promise ${i} in ${finalDl}ms`)
      .catch(onFailure =>
      {Notify.failure(onFailure)});
      console.log(finalDl);
    }, finalDl)
  };
  };

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(`martian`);
  createPromise(amountValue, delayValue, step)})
