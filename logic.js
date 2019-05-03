// word to guess for word game - theme = WORDS
var gameWords = ["woord","parola", "ord", "slowo", "word", "mot", "gair"];

// Returns random word from gameWords array
function randomWord (gameWords) {
    var randomIndex = Math.floor(Math.random() * gameWords.length);
    return gameWords[randomIndex];
}

// Identifies if a guessed letter is in the word

function 
