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
    monarchy: "monarquía",
    eat: "Comer",
    some: "algunas",
    french: "papas",
    fries: "fritas",
    on: "en",
    the: "el",
    american: "penitenciario",
    prison: "americano",
    system: "sistema"
    };

    augSpanish.transSpanish = function(input) {
      translate(input, spanishGreeting);
      }

  return augSpanish;

}(Lang));
