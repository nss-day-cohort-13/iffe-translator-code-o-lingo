var Lang = (function(augFrench) {

    var frenchGreeting = {
    "happy":"heureux", 
    "bastille":"bastille", 
    "day":"journee", 
    "for":"pour",
    "someone":"quelqu'un",
    "still":"encore",
    "stuck":"coince",
    "in":"dans",
    "a":"une",
    "monarchy":"la monarchie"
  	};

  	augFrench.transFrench = function(input) {
			var output = "";
			for (var i = 0; i < input.length; i++) {
			var current = input[i];
			output += frenchGreeting[current] + " ";
			printTranslation(output);
		  };	
	  }

return augFrench;

}(Lang));

    

    