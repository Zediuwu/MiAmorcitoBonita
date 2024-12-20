document.addEventListener("DOMContentLoaded", function() {

  const targetDates = [
    new Date('2024-08-11T00:00:00').getTime(), 
    new Date('2024-11-09T00:00:00').getTime(), 
    new Date('2024-12-17T00:00:00').getTime(), 
  ];

  const titles = [
    "Galería de fotos",
    "Cumpleaños de mi amorcito",
    "Nuestro Aniversario"
  ];

  function showButton(index) {
    const buttonContainer = document.getElementById(`button-container${index + 1}`);
    const countdown = document.getElementById(`countdown${index + 1}`);
    const title = document.getElementById(`title${index + 1}`);

    title.innerText = titles[index];
    countdown.classList.add('hidden');
    buttonContainer.classList.remove('hidden');
  }

  function updateCountdown(targetDate, ids, index) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      showButton(index);
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById(ids.days).innerText = days < 10 ? '0' + days : days; 
      document.getElementById(ids.hours).innerText = hours < 10 ? '0' + hours : hours;
      document.getElementById(ids.minutes).innerText = minutes < 10 ? '0' + minutes : minutes;
      document.getElementById(ids.seconds).innerText = seconds < 10 ? '0' + seconds : seconds;
    }
  }

  function updateAllCountdowns() {
    targetDates.forEach((date, index) => {
      updateCountdown(date, {
        days: `days${index + 1}`,
        hours: `hours${index + 1}`,
        minutes: `minutes${index + 1}`,
        seconds: `seconds${index + 1}`
      }, index);
    });
  }

  setInterval(updateAllCountdowns, 1000);
});
