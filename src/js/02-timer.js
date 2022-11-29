import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - new Date() < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.btnStart.disabled = false;
      refs.btnStart.addEventListener('click', () => {
        let timerId = setInterval(() => {
          const ms = selectedDates[0] - new Date();
          convertMs(ms);
          function convertMs(ms) {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const days = Math.floor(ms / day);
            const hours = Math.floor((ms % day) / hour);

            const minutes = Math.floor(((ms % day) % hour) / minute);

            const seconds = Math.floor((((ms % day) % hour) % minute) / second);

            addLeadingZero();
            refs.days.textContent = addLeadingZero(`${days}`);
            refs.hours.textContent = addLeadingZero(`${hours}`);
            refs.minutes.textContent = addLeadingZero(`${minutes}`);
            refs.seconds.textContent = addLeadingZero(`${seconds}`);
          }
          if (ms < 1000) {
            clearInterval(timerId);
          }
        }, 1000);
      });
    }
  },
};

flatpickr(refs.input, options);
