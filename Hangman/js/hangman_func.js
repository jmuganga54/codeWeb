class Hangman {
  /**
   *
   * @param {string} word - word to be guessed
   * @param {number} remainGuess - number of remaining guess to guess
   *
   *
   */
  constructor(word, remainGuess) {
    this.word = word.toLowerCase().split("");
    this.guessLetter = [];
    this.remainGuess = remainGuess;
    this.status = "playing";
  }

  /**
   *
   * @returns word with guessed letter, or missing (*) letter
   */
  getPuzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.guessLetter.includes(letter) || letter == "") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }

  /**
   *
   * @param {character} guess - character passed as a guess
   */
  makeGuess(guess) {
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

    this.calculateStatus();
  }

  /**
   * Function to calculate the status
   */
  calculateStatus() {
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

    console.log(this.guessMessage());
  }

  /**
   *
   * @returns {string} - status of the game
   */
  guessMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainGuess}`;
    } else if (this.status === "failed") {
      return `Nice try the word was ${this.word.join("")}`;
    } else {
      return `Great work you guessed the word`;
    }
  }
}
