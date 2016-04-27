var Lang = (function(augSpanish) {

// Happy Bastille Day to someone still stuck in a monarchy

  var spanishGreeting = {
    Happy: "Feliz",
    Bastille: "Bastilla",
    Day: "Día",
    to: "a",
    someone: "alguien",
    still: "todavía",
    stuck: "atrapado",
    in: "en",
    a: "una",
    monarchy: "monarquía"
  };

  augSpanish.transSpanish = function(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
      var current = input[i].toLowerCase();
      output += spanishGreeting[current] + " ";
      printTranslation(output);
    };
  }

  return augSpanish;

}(Lang));
