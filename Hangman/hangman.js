/**
 * 
 * @param {string} word - word to be guessed
 * @param {number} remainGuess - number of guess to guess
 * 
 * 
 */
const Hangman = function(word,remainGuess){
    this.word = word.toLowerCase().split('')
    this.guessLetter = ['c']
    this.remainGuess = remainGuess
}

/**
 * 
 * @returns word with guessed letter, and missing (*) letter
 */
Hangman.prototype.getPuzzle = function(){
    let puzzle = ''
    this.word.forEach((letter)=>{
        if(this.guessLetter.includes(letter) || letter == ''){
            puzzle += letter;
            
            }else{
             puzzle += '*'
            } 
        
})
       return puzzle
}

const guess1 = new Hangman('cat', 2)
guess1.guessLetter.push('a')
console.log(guess1.getPuzzle())


const guess2 = new Hangman('joseph',5)
guess2.guessLetter.push('j')
console.log(guess2.getPuzzle())