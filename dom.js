// main content
var mainContent = document.getElementById('content');


// user input in the textarea field
var userInput = document.getElementById('message');


// danish radio button
var danishPerson = document.getElementById('danish');


// french radio button
var frenchPerson = document.getElementById('french');


// spanish radio button
var spanishPerson = document.getElementById('spanish');


// translate button, once clicked, it will store the value of the textarea into a new variable called "message"
// next, it checks to see which radio button is checked, then it will run the translate button by
// passing the users message into the checked IFFE
var translateButton = document.getElementById('button').addEventListener("click", function(MouseEvent) {
	console.log("event", MouseEvent);
	var message = userInput.value;
	message = message.split(" ");
	console.log("The users array: ", message);
	if (frenchPerson.checked) {
		Lang.transFrench(message);
	} else if (danishPerson.checked) {
		Lang.transDanish(message);
	} else if (spanishPerson.checked) {
		Lang.transSpanish(message);
	}
});

// we need to return 'message'?

// users translated output
var userOutput = document.getElementById('output');

function printTranslation(translation) {
	userOutput.innerHTML = "<p>" + translation + "</p>";
}

// Translate function

function translate(input, language) {
		var output = "";
		for (var i = 0; i < input.length; i++) {
			var current = input[i].toLowerCase();
			if (current === "") {
				output;
			} else {
					output += language[current] + " ";
				}
		printTranslation(output);
		}
}
