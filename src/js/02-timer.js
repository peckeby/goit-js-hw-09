import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const myInput = document.querySelector('#datetime-picker');
const btn = document.querySelector('button');
const nums = document.querySelectorAll('.label');
const names = document.querySelectorAll('.value');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      btn.disabled = true;
      window.alert('Please choose a date in the future');
      return;
    }
    btn.disabled = false;
  },
}

const fp = flatpickr(myInput, options);

const timer = {
  timerIntervalId: null,

  start() {
    timerIntervalId = setInterval(() => {
      const diff = fp.selectedDates[0] - Date.now();

      if (diff <= 0) {
        timer.stop();
        return;
      }

      const { days, hours, minutes, seconds } = timer.convertMs(diff);

      document.querySelector('[data-days]').textContent = timer.pad(days);
      document.querySelector('[data-hours]').textContent = timer.pad(hours);
      document.querySelector('[data-minutes]').textContent = timer.pad(minutes);
      document.querySelector('[data-seconds]').textContent = timer.pad(seconds);

    }, 1000)
  },

  convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },

  stop() {
    clearInterval(this.timerIntervalId);
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },
};

btn.onclick = timer.start;








