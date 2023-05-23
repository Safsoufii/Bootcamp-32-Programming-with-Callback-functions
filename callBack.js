let intervalID; // Declare a variable to store the interval ID
let counter = 1; // Declare a variable to store the current count, initializing it to 1

// Define a function that starts the counter
function startCounter() {
    // Set an interval to run the anonymous function every 1000ms (1 second)
    // and store the interval ID in the intervalID variable
    intervalID = setInterval(function() {
        console.log(counter); // Log the current count to the console
        counter++; // Increment the count by 1
    }, 1000);
}

// Define a function that stops the counter
function stopCounter() {
    // Clear the interval using the interval ID
    clearInterval(intervalID);
}

// Get the start button element from the DOM by its ID
let startButton = document.getElementById('start');
// Get the stop button element from the DOM by its ID
let stopButton = document.getElementById('stop');

// Add a click event listener to the start button that calls the startCounter function
startButton.addEventListener("click", startCounter);
// Add a click event listener to the stop button that calls the stopCounter function
stopButton.addEventListener("click", stopCounter);

