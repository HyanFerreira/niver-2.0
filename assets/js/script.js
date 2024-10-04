document.addEventListener('DOMContentLoaded', function() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('mins');
  const secondsEl = document.getElementById('seconds');

  const newDay = '5 Oct 2024';
  const envelope = document.querySelector('.envelope-wrapper');

  let clickCount = 0;

  function countdown() {
    const newDayDate = new Date(newDay);
    const currentDate = new Date();

    const totalSeconds = (newDayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  envelope.addEventListener('click', () => {
    const currentDate = new Date();
    const newDayDate = new Date(newDay);
    const alertEn = document.getElementById('alert-en');

    if (currentDate.toDateString() === newDayDate.toDateString()) {
      envelope.classList.toggle('flap');
      alertEn.innerHTML = '';
    } else {
      clickCount++;
      if (clickCount === 1) {
        alertEn.classList.add('active');
      } else if (clickCount === 2) {
        alertEn.innerHTML = 'CALMA!!';
      } else if (clickCount === 3) {
        alertEn.innerHTML = 'Tá díficil em grilo...';
      } else if (clickCount === 4) {
        alertEn.innerHTML = 'O ansiedade do carai em, dar pra mim que é bom nada...';
      } else {
        alertEn.innerHTML = 'Desisto...';
      }
    }
  });

  countdown();

  setInterval(countdown, 1000);
});
