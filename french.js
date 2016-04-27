var Lang = (function(augFrench) {

  var frenchGreeting = {
    happy: "Heureux",
    bastille: "Bastille",
    day: "Journee",
    to: "a",
    someone: "quelqu'un",
    still: "encore",
    stuck: "coince",
    in: "dans",
    a: "une",
    monarchy: "la monarchie",
    eat: "Mangez",
    some: "certains",
    french: "pommes",
    fries: "frites",
    on: "sur",
    the: "la",
    american: "prison",
    prison: "americain",
    system: "systeme"
  	};

  	augFrench.transFrench = function (input) {
      translate(input, frenchGreeting);
      }

  return augFrench;

}(Lang));
