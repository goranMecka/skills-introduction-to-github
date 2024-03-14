// Target date
const targetDate = new Date('2024-04-11T00:00:00');

// Function to calculate the remaining time
function calculateTimeRemaining(endTime) {
  const totalMilliseconds = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((totalMilliseconds / 1000) % 60);
  const minutes = Math.floor((totalMilliseconds / 1000 / 60) % 60);
  const hours = Math.floor((totalMilliseconds / (1000 * 60 * 60)) % 24);
  const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
  
  return {
    total: totalMilliseconds,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

// Function to initialize the countdown
function initializeCountdown() {
  const countdownElement = document.getElementById('timer');
  
  function updateCountdown() {
    const timeRemaining = calculateTimeRemaining(targetDate);
    
    // Display the remaining time
    countdownElement.innerHTML = `
    <div class="row">
    <div class="col-6">
    <h3 class=''><span class='red'>${timeRemaining.days}</span> : Days</h3>
    <h3><span class='red'>${timeRemaining.hours}</span> : Hours</h3>

   </div>


   <div class="col-6">
   <h3 class=''><span class='red'>${timeRemaining.minutes}</span> : Minutes</h3>
   <h3><span class='red'>${timeRemaining.seconds}</span> : Seconds</h3>
   </div>
  </div>
    `;
    
    // Update every second
    setTimeout(updateCountdown, 1000);
  }
  
  // Initial call to update countdown
  updateCountdown();
}

// Call the initializeCountdown function when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCountdown);