/**
 *
 * @param {string} word - word to be guessed
 * @param {number} remainGuess - number of guess to guess
 *
 *
 */
const Hangman = function (word, remainGuess) {
  this.word = word.toLowerCase().split("");
  this.guessLetter = ["c"];
  this.remainGuess = remainGuess;
  this.status = "playing";
};

/**
 *
 * @returns word with guessed letter, and missing (*) letter
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

  if (isUnique) {
    //if the guess is unique push it to guessLetter array
    this.guessLetter.push(guess);
  }

  /**
   * checking if it's unique and its a bad guess
   * (does the guess exist in the actual word array)
   * if we have a bad guess and its unique bad guess
   * we are going to decrement remaining guess by 1
   */

  if (isUnique && isBadGuess) {
    this.remainGuess--;
  }

  this.calculateStatus;
};

Hangman.prototype.calculateStatus = function () {
  let finished = true;
  //Checking if all the letters of the word are in guessedLetters array
  this.word.forEach((letter) => {
    if (this.guessLetter.includes(letter)) {
      // finished = true
    } else {
      finished = false;
    }
  });

  if (this.remainGuess === 0) {
    this.status = "failed";
  } else if (finished) {
    this.status = "finished";
  } else {
    this.status = "playing";
  }
};

const guess1 = new Hangman("cat", 2);

const guess2 = new Hangman("joseph", 5);

/**
 * AddEventListener to capture key press on keyboards
 */
window.addEventListener("keydown", (e) => {
  const guess = e.key;
  console.log("Guess " + guess);
  guess1.makeGuess(guess);
  console.log(guess1.getPuzzle());
  console.log(guess1.remainGuess);
  console.log(guess1.status);
});
