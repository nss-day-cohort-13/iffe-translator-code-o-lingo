var Lang = (function() {

	var danish = {
		happy: "Glad",
		bastille: "Bastilledagen",
		day: "",
		to: "til",
		someone: "nogen",
		still: "stadig",
		stuck: "fast",
		in: "i",
		a: "et",
		monarchy: "monarki",
		eat: "Spise",
		some: "nogle",
		french: "pommes",
		fries: "frites",
		on: "pa",
		the: "den",
		american: "amerikanske",
		prison: "faengselssystem",
		system: ""
	};

	return {
		transDanish: function(input) {
			translate(input, danish);
		}
	}

}());
