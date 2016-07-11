/**************************
**************** Initialize
**************************/

var counter = 0;
var response;
var userName = prompt("Please tell me your name.");



/**************************
***************** Functions
**************************/

// All-in-one guess function
function enterGuess(quest) {
   response = false;
   var guess = prompt(userName + ", " + quest);
   if (guess.toUpperCase() == "YES" || guess.toUpperCase() == "Y" || guess == 8) {
         counter += 1;
         response = true;
   }
}

// Display images in the DOM
function showImage(src) {
   var img = document.createElement("img")
   img.src = src;
   document.body.appendChild(img);
}



/**************************
** Question, Answer, Images
**************************/

enterGuess("did I grow up in Claremont, California?");
if (response === true) {
   showImage("img/claremont-yale-and-second.jpg");
}

enterGuess("did I attend UCLA?");
if (response === true) {
   showImage("img/ucla-and-downtown.jpg");
}

enterGuess("do I enjoy Korean food?");
if (response === true) {
   showImage("img/korean-food.jpg");
}

enterGuess("how many years did I live in Los Angeles?");
if (response === true) {
   showImage("img/hollywood-boulevard-at-mccadden-place.jpg");
}



/**************************
***** Write response to DOM
**************************/

// Write the final score into the document
var score = document.getElementById("finalScore");
score.innerHTML = "You got " + counter + " answers correct."

// Print the answers to the DOM
var msg = document.getElementById("answers");
msg.innerHTML = "I <span>did</span> grow up in Claremont in eastern Los Angeles County.<br />";
msg.innerHTML += "I <span>did</span> attend UCLA to study accounting and finance.<br />";
msg.innerHTML += "I <span>do</span> enjoy Korean food whenever I can.<br />";
msg.innerHTML += "I lived in Los Angeles for 8 years.";
