function Timer() {
  const maxBtn = document.querySelector('.btn2');
  const minBtn = document.querySelector('.btn1');
  const timeText = document.querySelector('.time__text');
  let i = 0;
  function buttonPlus() {
    maxBtn.addEventListener('mousedown', () => {
      const timerElement = document.getElementById('timer');
      // eslint-disable-next-line no-plusplus
      i++;
      timerElement.innerHTML = i;
      // eslint-disable-next-line no-undef
      moment().add(timerElement, 'minutes');
    });
  }
  buttonPlus();
  function buttonMinus() {
    minBtn.addEventListener('mousedown', () => {
      const timerElement = document.getElementById('timer');
      // eslint-disable-next-line no-plusplus
      i--;
      timerElement.innerHTML = i;
    });
  }
  buttonMinus();
  const startBtn = document.querySelector('.start__btn');

  // eslint-disable-next-line no-use-before-define
  startBtn.addEventListener('click', () => {
    // eslint-disable-next-line no-constant-condition, no-cond-assign
    if ((maxBtn.style.display = 'block')) {
      maxBtn.style.display = 'none';
      minBtn.style.display = 'none';
      startBtn.style.display = 'none';
      if (i >= 0) {
        timeText.innerHTML = 'Осталось';
      }
    }

    // eslint-disable-next-line no-undef
    const endDate = moment().add(i + 1, 'minutes');
    // eslint-disable-next-line no-inner-declarations, no-unused-vars
    function updateTimer() {
      // eslint-disable-next-line no-undef
      const now = moment();
      // eslint-disable-next-line no-undef
      const data = moment.duration(endDate.diff(now));
      const minutes = data.minutes();
      const seconds = data.seconds();
      // eslint-disable-next-line no-undef
      timerElement = document.getElementById('timer');
      // eslint-disable-next-line no-undef
      timerElement.innerHTML = i !== 0 ? `${minutes - 1}:${seconds}` : ' ';
      // eslint-disable-next-line no-undef
      timerElement.innerHTML = data.minutes() <= 0 ? 'Время истекло!' : `${minutes - 1}:${seconds}`;
    }
    setInterval(updateTimer, 1000);
    updateTimer();
    // eslint-disable-next-line no-undef, eqeqeq
    if (timerElement.innerHTML == 'Время истекло!') {
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }, '1000');
    }
  });
}

Timer();
