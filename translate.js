
var Lang = (function() {

	return {
		transLang: function() {
			var message = userInput.value;
			message.split(" ");
			console.log("message array: ", message);
			if (frenchPerson.checked) {
				Lang.transFrench(message);
			} else if (danishPerson.checked) {
				Lang.transDanish(message);
			} else if (spanishPerson.checked) {
				Lang.transSpanish(message);
			} else {
				alert("Please select a language.");
			}
		}
	}

}());
