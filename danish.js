
var Lang = (function() {

	var danish = {
		happy: "glad",
		bastille: "bastilledagen",
		day: "",
		to: "til",
		someone: "nogen",
		still: "stadig",
		stuck: "fast",
		in: "i",
		a: "et",
		monarchy: "monarki"
	};

	return {
		transDanish: function(input) {
			translate(input, danish);
		}
	}

}());
