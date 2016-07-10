var counter = 0;
var userName = prompt("Please tell me your name.");

// All-in-one guess function
function enterGuess(quest) {
   var guess = prompt(userName + ", " + quest);
   if (guess.toUpperCase() == "YES" || guess.toUpperCase() == "Y" || guess == 8) {
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

// Print the answers to the DOM
var msg = document.getElementById("answers");
msg.innerHTML = "I <span>did</span> grow up in Claremont in eastern Los Angeles County.<br />";
msg.innerHTML += "I <span>did</span> attend UCLA to study accounting and finance.<br />";
msg.innerHTML += "I <span>do</span> enjoy Korean food whenever I can.<br />";
msg.innerHTML += "I lived in Los Angeles for 8 years.";
