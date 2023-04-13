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

Hangman.prototype.makeGuess =  function (guess){
  //converting a guess to lowercase
  guess = guess.toLowerCase()

  //checking if the input guess is unique( not being submitted before)
  const isUnique = !this.guessLetter.includes(guess)

  //checking if a guess is a bad guess
  const isBadGuess = !this.word.includes(guess)

  if(isUnique){
    //if the guess is unique push it to guessLetter array
    this.guessLetter.push(guess)
  }

  /**
   * checking if it's unique and its a bad guess
   * (does the guess exist in the actual word array)
   * if we have a bad guess and its unique bad guess
   * we are going to decrement remaining guess by 1
   */

  if(isUnique && isBadGuess){
    this.remainGuess--
  }

  
}


const guess1 = new Hangman("cat", 2);
guess1.guessLetter.push("a");
console.log(guess1.getPuzzle());

const guess2 = new Hangman("joseph", 5);
guess2.guessLetter.push("j");
console.log(guess2.getPuzzle());
