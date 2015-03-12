techVocab.factory("AppFactory", function AppFactory($firebaseArray) {
  factory = {};
  // var ref = new Firebase("https://epicodusflashcards.firebaseio.com");
  // var sync = $firebaseArray(ref);
  // factory.decks = sync;

  factory.counter = 4 // the counter starts with the first non hard-coded id number

  factory.decks = [
    { name: "Ruby Methods", id:1, cardCounter: 11,
      cards: [
        {front: "string.chop()",
          back: "removes the last character", id:1, difficulty:0 },
        {front: "string.chomp()",
          back: "removes blank space and carriage returns from the end", id:2, difficulty:0 },
        {front: "array.join()",
          back: "concats an array into a string", id:3, difficulty:0 },
        {front: "array.reverse()",
          back: "reverses order of array elements", id:4, difficulty:0 },
        {front: "array.shuffle()",
          back: "randomizes order of elements", id:5, difficulty:0 },
        {front: "float.ceil()",
          back: "rounds up to integer", id:6, difficulty:0 },
        {front: "array.unshift()",
          back: "takes an argument and adds it to the beginning of the array", id:7, difficulty:0 },
        {front: "array.pop()",
          back: "removes the last element of the array and returns it", id:8, difficulty:0 },
        {front: "array.length()",
          back: "returns the number of elements in the array", id:9, difficulty:0 },
        {front: "array.shift()",
          back: "removes the first element of the array and returns it", id:10, difficulty:0 }
      ]
    },
    { name:"JavaScript", id:2, cardCounter: 11,
        cards: [
          {front: "parseFloat()",
            back: "Parses a string and returns a floating point number", id:1, difficulty:0 },
          {front: "parseInt()",
            back: "Parses a string and returns an integer", id:2, difficulty:0 },
          {front: "toExponential()",
            back: "Converts a number to exponential notation", id:3, difficulty:0 },
          {front: "concat()",
            back: "Combines the text of two or more strings and returns a new string", id:4, difficulty:0 },
          {front: "alert()",
            back: "Opens a dialog box and returns undefined", id:5, difficulty:0 },
          {front: "confirm()",
            back: "Opens a dialog box and returns a boolean", id:6, difficulty:0 },
          {front: "prompt()",
            back: "Opens a dialog box and returns a string", id:7, difficulty:0 },
          {front: "charAt()",
            back: "Returns the specified character from a string", id:8, difficulty:0 },
          {front: "join()",
            back: "Joins all elements of an array into a string", id:9, difficulty:0 },
          {front: "pop()",
            back: "Removes the last element from an array and returns that element", id:10, difficulty:0 }
        ]
      },
    { name:"Spanish", id:3, cardCounter: 11,
        cards: [
          {front: "Hola",
            back: "Hello", id:1, difficulty:0 },
          {front: "Adios",
            back: "Goodbye", id:2, difficulty:0 },
          {front: "Comida",
            back: "Food", id:3, difficulty:0 },
          {front: "Almuerza",
            back: "Lunch", id:4, difficulty:0 },
          {front: "Los zapatos",
            back: "Shoes", id:5, difficulty:0 },
          {front: "La ardilla",
            back: "Squirrel", id:6, difficulty:0 },
          {front: "La cama",
            back: "The bed", id:7, difficulty:0 },
          {front: "La almohada",
            back: "The pillow", id:8, difficulty:0 },
          {front: "La pintura",
            back: "Painting", id:9, difficulty:0 },
          {front: "La panaderia",
            back: "Bakery", id:10, difficulty:0 }
        ]
      },
      { name:"Non-technical Interview Questions", id:4,
          cards: [
            {front: "Why did you get into programming?",
              back: "Try and give a short overview, segway into a problem, and then give a solution!", id:1, difficulty:0 },
            {front: "What made you pick Epicodus?",
              back: "Overview, problem, solution.", id:2, difficulty:0 },
            {front: "Where do you see yourself in the future?",
              back: "Try and relate your future to your job.", id:3, difficulty:0 },
            {front: "Tell me about yourself.  What's your background?",
              back: "Do your best to relate your background to your job of interest.", id:4, difficulty:0 },
            {front: "What problems do you see with current web development tools?",
              back: "Overview. Problem. Solution", id:5, difficulty:0 },
            {front: "What do you like about current web development trends?",
              back: "Relate to trends your job of interest uses", id:6, difficulty:0 },
            {front: "Do you write JavaScript or rely more on libraries like jQuery?",
              back: "Try and show how you are capable of both?", id:7, difficulty:0 },
            {front: "What frameworks have you used?",
              back: "Ember, Angular...", id:8, difficulty:0 },
            {front: "What testing tools have you used?",
              back: "Rspec, Mocha", id:9, difficulty:0 },
            {front: "Are you familiar with HAML/SASS/Markdown?",
              back: "HAML- lightweight markup language SASS- a CSS extension Markdown- text to HTML conversion tool", id:10, difficulty:0 },
            {front: "Why do you want to work here?",
              back: "Overview. Problem. Solution.", id:11, difficulty:0 },
            {front: "What questions do you have for me?",
              back: "Ask about their practices, tools and culture - have three or so questions ready for them.", id:12, difficulty:0 },
            {front: "What kind of culture do you want in your workspace?",
              back: "Try and link this to what you know about their culture and what you want.", id:13, difficulty:0 },
            {front: "What are some of the challenges you faced while pairing?",
              back: "Overview. Problem. Solution.", id:14, difficulty:0 },
            {front: "Give an example of how you resolved a disagreement with your pair.",
              back: "Overview. Problem. Soltuion.", id:15, difficulty:0 },
            {front: "Tell me about the intern project you worked on.",
              back: "Try and relate your story to the project of interest.", id:16, difficulty:0 }
          ]
        }
  ];
  factory.decks.forEach( function(deck) {
    deck.cards.forEach( function(card) {
      card.chance = 1;
    });
  });
  factory.addCard = function(deck, front, back) {
    deck.cards.push({front: front, back: back, id: deck.cardCounter});
    deck.cardCounter += 1;
  };
  factory.deleteCard = function(card, deck) {
    var index = deck.cards.indexOf(card);
    deck.cards.splice(index, 1);
    // deck.cards.forEach(carte) {
    //   var place = deck.cards.indexOf(carte);
    //   carte.id = place + 1;
    // }
  };
  factory.addDeck = function() {
    var newDeck = {name: "New Deck", id: factory.counter, cardCounter: 1, cards: []};
    factory.counter += 1;
    factory.decks.push(newDeck);
    // factory.decks.$loaded();
    return newDeck;
  }
  factory.deleteDeck = function() {
    var index = factory.decks.indexOf(deck);
    factory.decks.splice(index, 1);
  }
  return factory;
});
