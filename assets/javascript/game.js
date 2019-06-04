// Set variables and arrays
var win = 0;
var loss = 0;
var attempts = 10;
var letters = ("abcdefghijklmnopqrstuvwxyz").split("");


// How the computer will select its letter?

var letterPick = letters[Math.floor(Math.random() * letters.length)];

console.log(letters);
console.log(letterPick);

// How will the user select its letter?

document.onkeyup = function (event) {

    var userGuess = event.key;

    // Reset the game after a win/loss
    function Reset() {
        if (options.indexOf(userGuess) > -1) {

            if (userGuess === computerGuess) {
                win++;
                attempts = 10;
                letters = [];
            }

            if (userGuess != computerGuess) {
                attempts--;
                letters.push(userGuess);
            }

            if (attempts === 0) {

               attempts = 10;
                losses++;
                letters = [];
            }