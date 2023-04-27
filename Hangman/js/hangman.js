
const guess1 = new Hangman("cat", 2);

const guess2 = new Hangman("joseph", 5);

/**
 * AddEventListener to capture key press on keyboards
 */
window.addEventListener("keydown", (e) => {
  const guess = e.key;
  console.log("Guess: " + guess);
  guess1.makeGuess(guess);
  console.log(guess1.getPuzzle());
});
