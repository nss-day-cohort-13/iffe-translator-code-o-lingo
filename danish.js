
var Lang = (function() {

	var danish = {
		happy: "god",
		bastille: "bastille",
		day: "dag"
	};

	return {
	transDanish: function(input) {
		var output = "";
		for (var i = 0; i < input.length; i++) {
			var current = input[i].toLowerCase();
			if (current === "") {
				output;
			} else {
					output += danish[current] + " ";
					printTranslation(output);
				}
		};
	}
}

}());
