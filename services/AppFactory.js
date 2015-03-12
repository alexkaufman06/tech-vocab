techVocab.factory("AppFactory", function AppFactory($firebaseArray) {
  factory = {};
  // var ref = new Firebase("https://epicodusflashcards.firebaseio.com");
  // var sync = $firebaseArray(ref);
  // factory.decks = sync;

  factory.decks = [
    { name: "Ruby Methods", id:1,
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
    { name:"JavaScript", id:2,
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
          {front: "confrim()",
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
    { name:"Spanish", id:3,
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
      }
  ];
  factory.addCard = function(deck, front, back) {
    deck.cards.push({front: front, back: back, id: deck.cards.length + 1});
  };
  factory.deleteCard = function(card,deck) {
    var index = deck.cards.indexOf(card);
    deck.cards.splice(index, 1);
    // deck.cards.forEach(carte) {
    //   var place = deck.cards.indexOf(carte);
    //   carte.id = place + 1;
    // }
  };
  factory.addDeck = function() {
    var newDeck = {name: "New Deck", id: factory.decks.length + 1, cards: []};
    factory.decks.push(newDeck);
    // factory.decks.$loaded();
    return newDeck;
  }
  return factory;
});
