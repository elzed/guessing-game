/*********************************
*********************** Initialize
*********************************/

var response;
var counter = 0;
var userName = prompt("Please tell me your name.");
var msg = document.getElementById("answers");



/*********************************
************************ Functions
*********************************/

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



/*********************************
**  Question, Answer, Image, Score
*********************************/

enterGuess("did I grow up in Claremont, California?");
if (response === true) {
   showImage("img/claremont-yale-and-second.jpg");
   msg.innerHTML = "<span>I did grow up in Claremont in eastern Los Angeles County.</span><br />";
} else {
   msg.innerHTML = "I did grow up in Claremont in eastern Los Angeles County.<br />";
}

enterGuess("did I attend UCLA?");
if (response === true) {
   showImage("img/ucla-and-downtown.jpg");
   msg.innerHTML += "<span>I did attend UCLA to study accounting and finance.</span><br />";
} else {
   msg.innerHTML += "I did attend UCLA to study accounting and finance.<br />";
}

enterGuess("do I enjoy Korean food?");
if (response === true) {
   showImage("img/korean-food.jpg");
   msg.innerHTML += "<span>I do enjoy Korean food whenever I can.</span><br />";
} else {
   msg.innerHTML += "I do enjoy Korean food whenever I can.<br />";
}

enterGuess("how many years did I live in Los Angeles?");
if (response === true) {
   showImage("img/hollywood-boulevard-at-mccadden-place.jpg");
   msg.innerHTML += "<span>I lived in Los Angeles for 8 years.</span>";
} else {
   msg.innerHTML += "I lived in Los Angeles for 8 years.";
}

var score = document.getElementById("finalScore");
score.innerHTML = "You got " + counter + " answers correct."
