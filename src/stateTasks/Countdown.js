window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('start-button').addEventListener('click', () => {
      const timerInput = document.getElementById('timer-input');
      const timerDisplay = document.getElementById('timer-display');
  
      if (timerDisplay) {
        let seconds = parseInt(timerInput.value, 10);
        if (isNaN(seconds) || seconds < 0) {
          alert('Please enter a valid number of seconds.');
          return;
        }
  
        let intervalId = setInterval(() => {
          if (seconds > 0) {
            const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
            const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
            timerDisplay.textContent = `${minutes}:${remainingSeconds}`;
            seconds--;
          } else {
            clearInterval(intervalId);
            timerDisplay.textContent = '00:00';
            alert('Timer finished!');
          }
        }, 1000);
      } else {
        console.error('Timer display element not found.');
      }
    });
  });
  