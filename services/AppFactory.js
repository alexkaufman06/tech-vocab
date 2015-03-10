techVocab.factory("AppFactory", ['$firebaseObject', function AppFactory($firebaseObject) {
  var factory = {};

  var ref = new Firebase("https://epicodusflashcards.firebaseio.com/cards");
  var syncObject = $firebaseObject(ref);
  factory.cards = syncObject;


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
    { name:"Spanish", id:2,
      cards: [
        {front: "Hola",
          back: "Hello", id:1},
        {front: "Adios",
          back: "Goodbye", id:2},
        {front: "Comida",
          back: "Food", id:3},
        {front: "Almuerza",
          back: "Lunch", id:4}
      ]
    }
  ];
  factory.addCard = function(deck, front, back) {
    deck.cards.push({front: front, back: back, id: deck.cards.length + 1});
  };
  factory.addDeck = function() {
    var newDeck = {name: "New Deck", id: factory.decks.length + 1, cards: []};
    factory.decks.push(newDeck);
    return newDeck;
  }
  return factory;
}]);
