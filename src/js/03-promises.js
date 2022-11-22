import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
console.log(form.elements);

let finalDl = 0;

const createPromise = (delay, step, position) => {
  console.log(position);
  const finalDelay = delay + step * position;
  const finalPosition = position + 1;
  setTimeout(() => {
    new Promise(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        return Promise.resolve(
          `✅ Fulfilled promise ${finalPosition} in ${finalDelay}ms`
        ).then(onSuccess => {
          Notify.success(onSuccess);
        });
      }
      Promise.reject(`❌ Rejected promise ${finalPosition} in ${finalDelay}ms`).catch(
        onFailure => {
          Notify.failure(onFailure);
        }
      );
    });
  }, finalDelay);
};

form.addEventListener('submit', event => {
  event.preventDefault();
  const delayValue = Number(form.elements[0].value);
  const amountValue = Number(form.elements[2].value);
  const stepValue = Number(form.elements[1].value);
  [...Array(amountValue).keys()].forEach(index =>
    createPromise(delayValue, stepValue, index)
  );
});
