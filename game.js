console.log("Starting script. Asking user for information.");
var counter = 0;
var userName = prompt("Please tell me your name.");

var guess1 = prompt(userName + ", first question: Did I grow up in Boston?");
if (guess1.toUpperCase() == "NO" || guess1.toUpperCase() == "N") {
   console.log("User guess was correct.");
   alert("That's right, " + userName + "! I like Boston. \nBut I grew up in Claremont, California. \nThe other side of the country.");
   counter += 1; // increase correct answer counter by 1
} else {
   console.log("User guess was incorrect.");
   alert("No, sorry, " + userName + ". I grew up in Claremont, California. \nThe City of Trees and PhDs!");
}
console.log("variable 'counter' is now " + counter); // verify counter is working in console

var guess2 = prompt("Second question: Did I attend UCLA?");
if (guess2.toUpperCase() == "YES" || guess2.toUpperCase() == "Y") {
   console.log("User guess was correct.");
   alert("Cool, " + userName + ". You know me better than most.");
   counter += 1; // increase correct answer counter by 1
} else {
   console.log("User guess was incorrect.");
   alert("Sorry, " + userName + ". That's incorrect. \nI studied accounting at UCLA. Fascinating, huh?");
}
console.log("variable 'counter' is now " + counter); // verify counter is working in console

var guess3 = prompt("Third question: Do I enjoy Korean food?");
if (guess3.toUpperCase() == "YES" || guess3.toUpperCase() == "Y") {
   console.log("User guess was correct.");
   alert("Damn straight, " + userName + "! I'd be happy eating \nKorean food morning, noon and night.");
   counter += 1; // increase correct answer counter by 1
} else {
   console.log("User guess was incorrect.");
   alert("Boo! C'mon, " + userName + ", I thought we wuz friends! \nNo galbi for you!");
}
console.log("variable 'counter' is now " + counter); // verify counter is working in console

var guess4 = prompt("Final question: How many years did I live in Los Angeles?");
if (guess4 < 8 ) {
   console.log("Number entered by user is too low.");
   alert(userName + ", no, I spent more time there than that. \n8 years to be exact.");
} else if (guess4 > 8 ) {
   console.log("Number entered by user is too high.");
   alert(userName + ", no, I spent fewer years there than that. \n8 years to be exact.");
} else {
   console.log("Number entered by user is just right.");
   alert(userName + "! You got it right. Wow! You know me like your own shadow (kinda creepy).");
   counter += 1; // increase correct answer counter by 1
}
console.log("variable 'counter' is now " + counter); // verify counter is working in console

document.write("You got " + counter + " correct answers out of 4 questions.");
