// word to guess for word game - theme = WORDS
var gameWords = ["dorthy", "wizard", "slippers", "toto", "scarecrow", "lion", "munchkin", "oz", "twister"];

// Returns random word from gameWords array
function randomWord(gameWords) {
  var randomIndex = Math.floor(Math.random() * gameWords.length);
  // console.log("in randomWord Function ",gameWords[randomIndex]);
  return gameWords[randomIndex];
}

// Identifies if a guessed letter is in the word
function isCorrectGuess(word, letter) {
    return word.includes(letter);
  }

//   for (var i = 0; i<= word.length; i++) {
//   if (word[i] === letter) {
//       return true;
//    }
//   }
//  return false;
// }
 

// Fills ansWordArr with correct number of blanks equal to the randomWord
function getBlanks(word) {
   var ansWord = []
    for (var i = 0; i < word.length; i++) {
        ansWord[i] = "_";
    }
    return ansWord;
}

// fills a blanks array in the correct locations given a letter and the word that array was built from
function fillBlanks(word, ansWord, letter) {
  for (var i=0; i<=word.length; i++) {
    if (word[i] === letter){
      ansWord[i] = letter
    }
  }
  return ansWord;
}

//Manages the state of the game - aka the score for the current round and the over all game score

function setupRound(ansWord){
  var roundScore = {
    word:ansWord,
    guessesLeft: 9,
    wrongGuesses: [],
    puzzleState: getBlanks(ansWord),
    }
    // console.log(roundScore);
   return roundScore;
  }


function updateRound(round, letter){
// if isCorrectGuess is true update puzzleState on the round, 
  if( isCorrectGuess(round.word, letter)){
    round.puzzleState = fillBlanks(round.word, round.puzzleState, letter);
  }
// if isCorrectGuess is false update wrong guess and guess left
  else {
    round.guessesLeft--;
    round.wrongGuesses.push(letter);
  }
}

// checks if the game has been won or not
function hasWon(puzzleState){
    if (puzzleState.indexOf("_") === -1){
      return true;
    } 
    return false;
  }

function hasLost(guessesLeft){
  if(guessesLeft === 0){
    return true;
  }
   return false;
}

function isEndOfRound(round){
  if(round.guessesLeft === 0){
    return true;
  }
  if (hasWon(round.puzzleState)){
    return true;
  }
  return false;
}

function setupGame(gameWords, win, loses){
  var newRound = {
    words: gameWords,
    wins: win,
    losses: loses,
    round: setupRound(randomWord(gameWords)),
  }
  return newRound;
}

function startNewRound(game){
  var puzzleState = game.round.puzzleState;
    if (hasWon(puzzleState) === true) {
        ++game.wins;
        alert("Way to go! You just learned that " + game.round.word + " means word!");
    }
    else {
        ++game.losses;
        alert("Sorry you'll never know what " + game.round.word + " means");
    }
    game.round = setupRound(randomWord(gameWords))
}

var myGame =setupGame(gameWords, 0, 0);

