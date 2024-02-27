// const date = new Date();
// const moveInDate = new Date('05-28-2024');
// const timeLeft = moveInDate - date.toLocaleDateString('en-US');

// console.log(timeLeft);

function countdownTo(targetDate) {
    const target = new Date(targetDate).getTime();
    const countdown = document.getElementById('countdown');
  
    // Update the count down every 1 second
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = target - now;
    
        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Output the result in a variable
        const countdownText = days + " Days - " + hours + " Hours - " + minutes + " Minutes - " + seconds + " Seconds";
    
        // If the count down is over, write some text and stop the interval
        if (distance < 0) {
            clearInterval(interval);
            console.log("The countdown is over!");
            countdown.innerText = "00 Days - 00 Hours - 00 Minutes - 00 Seconds";
        } else {
            countdown.innerText = countdownText;
            console.log(countdownText);
        }
    }, 1000);
  }
  
  // Example usage: Countdown to "2024-12-31"
  countdownTo("2024-05-28");
  