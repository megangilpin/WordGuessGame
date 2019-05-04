// word to guess for word game - theme = WORDS
var gameWords = ["woord","parola", "ord", "slowo", "word", "mot", "gair"];


// Returns random word from gameWords array
var randomWord = function (gameWords) {
  var randomIndex = Math.floor(Math.random() * gameWords.length);
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
var getBlanks = function(word) {
   var ansWordArr = []
    for (var i = 0; i < word.length; i++) {
        ansWordArr[i] = "_";
    }
    return ansWordArr;
}

// fills a blanks array in the correct locations given a letter and the word that array was built from
var fillBlanks = function(word, ansCurrent, letter) {
  for (var i=0; i<=word.length; i++) {
  if (word[i] === letter){
   ansCurrent[i] = letter
  }
  }
  return ansCurrent;
}

//Manages the state of the game - aka the score for the current round and the over all game score

var setupRound = function(ansWord){
  var roundScore = {
    word:ansWord,
    guessesLeft:9,
    wrongGuesses: [],
    puzzleState: getBlanks(ansWord),
    }
   return roundScore;
  }

  


