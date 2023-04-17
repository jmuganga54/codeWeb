/**
 *
 * @param {string} word - word to be guessed
 * @param {number} remainGuess - number of remaining guess to guess
 *
 *
 */
const Hangman = function (word, remainGuess) {
  this.word = word.toLowerCase().split("");
  this.guessLetter = [];
  this.remainGuess = remainGuess;
  this.status = "playing";
};

/**
 *
 * @returns word with guessed letter, or missing (*) letter
 */
Hangman.prototype.getPuzzle = function () {
  let puzzle = "";
  this.word.forEach((letter) => {
    if (this.guessLetter.includes(letter) || letter == "") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });
  return puzzle;
};

/**
 *
 * @param {character} guess - character passed as a guess
 */
Hangman.prototype.makeGuess = function (guess) {
  //converting a guess to lowercase
  guess = guess.toLowerCase();

  //checking if the input guess is unique( not being submitted before)
  const isUnique = !this.guessLetter.includes(guess);

  //checking if a guess is a bad guess
  const isBadGuess = !this.word.includes(guess);
  debugger;

  if (isUnique) {
    //if the guess is unique push it to guessLetter array
    this.guessLetter.push(guess);
    debugger;
  }

  /**
   * checking if it's unique and its a bad guess
   * (does the guess exist in the actual word array)
   * if we have a bad guess and its unique bad guess
   * we are going to decrement remaining guess by 1
   */

  if (isUnique && isBadGuess) {
    this.remainGuess--;
    debugger;
  }

  this.calculateStatus();
};

Hangman.prototype.calculateStatus = function () {
  let finished = true;
  //Checking if all the letters of the word are in guessedLetters array
  this.word.forEach((letter) => {
    if (this.guessLetter.includes(letter)) {
      debugger;
      // finished = true
    } else {
      finished = false;
      debugger;
    }
  });

  if (this.remainGuess === 0) {
    this.status = "failed";
    debugger;
  } else if (finished) {
    this.status = "finished";
    debugger;
  } else {
    this.status = "playing";
    debugger;
  }

  console.log(this.guessMessage());
};

Hangman.prototype.guessMessage = function () {
  debugger;
  if (this.status === "playing") {
    debugger;
    return `Guesses left: ${this.remainGuess}`;
  } else if (this.status === "failed") {
    debugger;
    return `Nice try the word was ${this.word.join("")}`;
  } else {
    debugger;
    return `Great work you guessed the word`;
  }
};
const guess1 = new Hangman("cat", 2);
debugger;

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
