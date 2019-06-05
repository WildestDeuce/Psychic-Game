// Set variables and arrays
var win = 0;
var loss = 0;
var attempts = 10;
var letters = ("abcdefghijklmnopqrstuvwxyz").split("");
var attemptArray = [];

// How the computer will select its letter?

var letterPick = letters[Math.floor(Math.random() * letters.length)];

console.log(letters);
console.log(letterPick);

// How will the user select its letter?

document.onkeyup = function (event) {

    var userGuess = event.key;

    if (letters.indexOf(userGuess) > -1) {

        // Reset the game after a win/loss
        function Reset() {
            if (attemptArray.indexOf(userGuess) > -1) {

                if (userGuess === letterPick) {
                    win++;
                    attempts = 10;
                    attemptArray = []
                }

                if (userGuess != letterPick) {
                    attempts--;
                    attemptArray.push(userGuess);
                }

                if (attempts === 0) {

                    attempts = 10;
                    losses++;
                    attemptArray = [];
                }

            }

            //Dispaying to html

        }
        document.getElementById("win").textContent = win;
        document.getElementById("loss").textContent = loss;
        document.getElementById("attempts").textContent = attempts;
        document.getElementById("letterPick").textContent = letterPick;

        console.log(userGuess);
        console.log(letterPick);

    }
}