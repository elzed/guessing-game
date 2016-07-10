var counter = 0;
var answer;
var userName = prompt("Please tell me your name.");

function enterGuess(quest) {  // all-in-one guess function
   var guess = prompt(userName + ", " + quest);
   if (guess.toUpperCase() == "YES" || guess.toUpperCase() == "Y") {
         counter += 1;
   } else if (guess == 8) {
         counter += 1;
   }
}

enterGuess("did I grow up in Claremont, California?");
enterGuess("did I attend UCLA?");
enterGuess("do I enjoy Korean food?");
enterGuess("how many years did I live in Los Angeles?")

alert("Correct answers: " + counter);
