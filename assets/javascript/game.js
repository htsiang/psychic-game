// create alphabet array for computer to choose from
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
var numberOfWins = 0;
var numberOfLosses = 0;
var numberOfGuesses = 9;


// functin runs whenever user presses a key
document.onkeyup = function() {

    // Computer pseudo randomly chooses letter from letterArray
    //but only when numberOfGuess===9
    if(numberOfGuesses===9) {
        var computerLetter = letterArray[Math.floor(Math.random()*letterArray.length)];
        console.log("computer letter: " + computerLetter);
        console.log(typeof computerLetter);
        console.log(computerLetter.length);
    };

    // decreases # of guesses left & display new amount
    numberOfGuesses--;
    var guessRemainder = document.getElementById("guessRemainder");
    guessRemainder.textContent = "Guesses Left: " + numberOfGuesses;

    //determines which key was pressed
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    console.log(userGuess);
    console.log(typeof userGuess);
    console.log(userGuess.length);

    // get the element from html doc - guesses
    var guesses = document.getElementById("guesses");
    //dynamically create new element
    var newGuess = document.createElement("div");
    // places userGuess on html document using newGuess element
    newGuess.textContent = userGuess;
    guesses.appendChild(newGuess);

    // if no guesses remaining, reset & increment # of losses
    if (numberOfGuesses===0) {
        numberOfLosses++;
        var lossCount = document.getElementById("lossCount");
        lossCount.textContent = "Losses: " + numberOfLosses;

        numberOfGuesses=9;
        guesses.textContent = "Your Guesses so far: ";
        guessRemainder.textContent = "Guesses Left: 9";
    };

    // if userGuess is correct, reset & increment # of wins
    if(computerLetter===userGuess) {
        numberOfWins++;

        var winCount = document.getElementById("winCount");
        winCount.textContent = "Wins: " + numberOfWins;

        numberOfGuesses=9;
        guesses.textContent = "Your Guesses so far: ";
    };

};