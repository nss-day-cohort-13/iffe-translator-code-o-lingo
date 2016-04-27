var Lang = (function(augSpanish) {

  var spanishGreeting = {
    happy: "Feliz",
    bastille: "Bastilla",
    day: "Día",
    to: "a",
    someone: "alguien",
    still: "todavía",
    stuck: "atrapado",
    in: "en",
    a: "una",
    monarchy: "monarquía"
    };

    augSpanish.transSpanish = function(input) {
      translate(input, spanishGreeting);
      }

  return augSpanish;

}(Lang));
