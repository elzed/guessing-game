var counter = 0;
var answer;
var userName = prompt("Please tell me your name.");

// All-in-one guess function
function enterGuess(quest) {
   var guess = prompt(userName + ", " + quest);
   if (guess.toUpperCase() == "YES" || guess.toUpperCase() == "Y") {
         counter += 1;
   } else if (guess == 8) {
         counter += 1;
   }
}

// Ask a series of questions
enterGuess("did I grow up in Claremont, California?");
enterGuess("did I attend UCLA?");
enterGuess("do I enjoy Korean food?");
enterGuess("how many years did I live in Los Angeles?")

// Write the final score into the document
var score = document.getElementById("finalScore");
score.innerHTML = "You got " + counter + " answers correct."
