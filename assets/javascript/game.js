// Set variables and arrays
var win = 0;
var loss = 0;
var attempts = 10;
var letters = ("abcdefghijklmnopqrstuvwxyz").split("");



// How the computer will select its letter?


var letterPick =letters[Math.floor(Math.random()*letters.length)];

console.log(letters)
console.log(letterPick)

// How will the user select its letter?

document.onkeyup = function(event) {

    var userGuess = event.key;

 // Reset the game after a win/loss
 function Reset() {
    if (attempts > 0) {
        wins++
    }
    else if (attempts == 0) {
        losses++
    }

    $("#name").empty();
    name = names[Math.floor(Math.random() * names.length)];

    for (var i = 0; i < letters.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("id", alphabet[i]);
        letterBtn.text(alphabet[i]);
        $("#buttons").append(letterBtn);
    }

    $(".letter-button").on("click", clickMethod);

    for (var i = 0; i < name.length; i++) {
        var correct = $("<p>");
        correct.attr("id", i);
        correct.text(" _ ");
        $("#name").append(correct);
    }

   //guessesRemaining = 6;
    lettersRemaining = name.length; {

    console.log("Correct Name: " + name);
    console.log("Remaining Guesses: " + guessesRemaining);
    console.log("Remaining Letters: " + lettersRemaining);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("");
}

Reset();
 });
