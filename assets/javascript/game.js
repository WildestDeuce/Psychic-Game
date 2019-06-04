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

            if (userGuess === letterPick) {
                win++;
                attempts = 10;
                letters = [];
            }

            if (userGuess != letterPick) {
                attempts--;
                letters.push(userGuess);
            }

            if (attempts === 0) {

               attempts = 10;
                losses++;
                letters = [];
            }

    //Dispaying to html

    var html =

    "<h1>Psychic Guessing Game</h1>"
    "<h2>Guess What Letter I'm Thinking Of!</h2>"
    "<h3>Wins:" + win + "<span id="win"></span></h3>"
    "<h3>Losses:" + loss+ "<span id="loss"></span></h3>"
    "<h3>Guesses Remaining:" + attempts + "<span id="attempts"></span></h3>"
    "<h3>Guesses So Far:" + letterPick + "<span id="letterPick"></span></h3>"

    //document.getElementbyId(game).innerHTML = html or document.querySelector("#game").innerHTML = html;


console.log(userGuess)
console.log(letterPick)