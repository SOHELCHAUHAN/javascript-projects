let number = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkguess() {
  const userInput = document.getElementById("userguss").value;
  const message = document.getElementById("message");
  const guess = Number(userInput);
  attempts++;

  if (!guess || guess < 1 || guess > 10) {
    message.textContent = " Please enter a number between 1 and 10!";
    return;
  }

  if (guess === number) {
    message.textContent = ` Correct! The number was ${number}. Attempts: ${attempts}`;
  } else if (guess < number) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = " Too high! Try again.";
  }
}

