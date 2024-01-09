const quoteElement = document.getElementById('quote');
const userInput = document.getElementById('user-input');
const timerElement = document.getElementById('timer');

let startTime;

userInput.addEventListener('input', startTimer);

function startTimer() {
    if (!startTime) {
        startTime = new Date().getTime();
        setInterval(updateTimer, 1000);
    }

    const typedText = userInput.value;
    const originalText = quoteElement.innerText.trim();

    if (typedText === originalText) {
        const endTime = new Date().getTime();
        const elapsedTime = (endTime - startTime) / 1000;
        timerElement.innerText = `Time: ${elapsedTime.toFixed(2)}s`;
    }
}

function updateTimer() {
    if (startTime) {
        const currentTime = new Date().getTime();
        const elapsedTime = (currentTime - startTime) / 1000;
        timerElement.innerText = `Time: ${elapsedTime.toFixed(2)}s`;
    }
}