// Set variables and arrays
var win = 0;
var loss = 0;
var attempts = 10;
var letters = ("abcdefghijklmnopqrstuvwxyz").split("");
var attemptArray = [];

// How the computer will select its letter?

var letterPick;
var userGuess;

function computerPick() {

    if (attempts = 10) {
        letterPick = letters[Math.floor(Math.random() * letters.length)];
    }
}

// How will the user select its letter?

document.onkeyup = function (event) {
    userGuess = event.key;
    console.log("computer: " + letterPick);

    console.log(letters);
    console.log(userGuess);


    if (letters.indexOf(userGuess) > -1) {

        // Reset the game after a win/loss
        Reset()
        function Reset() {
            if (attempts < 1) {
                attempts = 10;
                computerPick()
                loss++;
                attemptArray = [];
            }
            // if (attemptArray.indexOf(userGuess) > -1) {
            else if (userGuess != letterPick) {
                attempts--;
                attemptArray.push(userGuess);
                console.log(attemptArray);
            }

            else if (userGuess === letterPick) {
                win++;
                computerPick()
                attempts = 10;
                attemptArray = []
            }



        }

        //Dispaying to html
    }
    document.getElementById("win").textContent = win;
    document.getElementById("loss").textContent = loss;
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("userGuess").textContent = attemptArray;
}
// }
