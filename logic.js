// word to guess for word game - theme = WORDS
var gameWords = ["woord","parola", "ord", "slowo", "word", "mot", "gair"];

// Returns random word from gameWords array
function randomWord(gameWords) {
  var randomIndex = Math.floor(Math.random() * gameWords.length);
  console.log(gameWords[randomIndex]);
  return gameWords[randomIndex];
}

// Identifies if a guessed letter is in the word
var isCorrectGuess = function(word, letter) {
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
var fillBlanks = function(word, ansWord, letter) {
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
    guessesLeft:9,
    wrongGuesses: [],
    puzzleState: getBlanks(ansWord),
    }
    console.log(roundScore);
   return roundScore;
  }


var updateRound = function(round, letter){
// if isCorrectGuess is true update puzzleState on the round, 
  if( isCorrectGuess(round.word, letter)){
    round.puzzleState = fillBlanks(round.word, round.puzzleState, letter);
  }
// if isCorrectGuess is false update wrong guess and guess left
  else {
    round.guessesLeft = round.guessesLeft - 1;
    round.wrongGuesses.push(letter);
  }
}

//checks if the game has been won or not
// var hasWon = function(puzzleState){
 //first check if the round has been won
  // if(puzzleState = getBlanks(ansWord)){
  //   return false
  // }
  //  else if (puzzleState === word){
  //    return true
  //  }
  //   }


  var hasWon = function(puzzleState){
  //   for (var i = 0; i< puzzleState.length; i++){
  //     if (puzzleState[i] === "_"){
  //       return false;
  //     }
  //   }
  //   return true;
  // }

    // if(puzzleState === word){
    //   return true;
    // }
    // return false;
    // }
    if (puzzleState.indexOf("_") === -1){
      return true;
    } 
    return false;
  }

var hasLost = function(guessesLeft){
  if(guessesLeft === 0){
    return true;
  }
   return false;
}

var isEndOfRound = function(round){
  if(round.guessesLeft === 0){
    return true;
  }
  if (hasWon(round.puzzleState)){
    return true;
  }
  return false;
}

var setupGame = function(gameWords, win, loses){
  var newRound = {
    words: gameWords,
    wins: win,
    losses: loses,
    round: setupRound(randomWord(gameWords)),
  }
  return newRound;
}

var startNewRound = function(game){
  var puzzleState = game.round.puzzleState;
    if (hasWon(puzzleState) === true) {
        ++game.wins;
        alert("Way to go! You just learned that " + game.round.word + " means word!");
    }
    else {
        ++game.losses;
        alert("Sorry you'll never know what " + game.round.word + " means");
    }
    return game;
}

var myGame =setupGame(gameWords, 0, 0);

