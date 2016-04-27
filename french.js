var Lang = (function(augFrench) {

  var frenchGreeting = {
    "happy":"Heureux",
    "bastille":"Bastille",
    "day":"Journee",
    "to":"a",
    "someone":"quelqu'un",
    "still":"encore",
    "stuck":"coince",
    "in":"dans",
    "a":"une",
    "monarchy":"la monarchie"
  	};

  	augFrench.transFrench = function (input) {
      translate(input, frenchGreeting);
      }

  return augFrench;

}(Lang));
