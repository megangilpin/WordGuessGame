// word to guess for word game - theme = WORDS
var gameWords = ["woord","parola", "ord", "slowo", "word", "mot", "gair"];
var ansWordArr = []

// Returns random word from gameWords array
var randomWord = function (gameWords) {
  var randomIndex = Math.floor(Math.random() * gameWords.length);
  return gameWords[randomIndex];
}

// Identifies if a guessed letter is in the word

var isCorrectGuess = function(word, letter) {
//     var guess = word.includes(letter) 
//     if (guess === true) {
//         return true;
//     }
//     else (guess === false ) {
//         return false;
//     }
//   }

  for (var i = 0; i<= word.length; i++) {
  if (word[i] === letter) {
      return true;
   }
  }
 return false;
}

// var getBlanks = function(word) {
//     for(var i=0; i<word.length; i++) {
//     ansWordArr[i] = "_";
//     }
//    retrun ansWordArr;
// }

// Fills ansWordArr with correct number of blanks equal to the randomWord
var getBlanks = function(word) {
    for (var i = 0; i < word.length; i++) {
        ansWordArr[i] = "_";
    }
    return ansWordArr;
}

var fillBlanks = function(word, letter, arr) {
  var ansWord = randomWord.split();
  for (var i=0; i<=ansWord.length; i++) {
      
  }
}


