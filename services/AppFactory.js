techVocab.factory("AppFactory", function AppFactory($firebaseArray, $state) {
  factory = {};
  // var ref = new Firebase("https://epicodusflashcards.firebaseio.com");
  // var sync = $firebaseArray(ref);
  // factory.decks = sync;
  factory.counter = 6 // the counter starts with the first non hard-coded id number
  factory.decks = [
    { name: "Ruby Methods", id: 1, cardCounter: 11,
      cards: [
        { front: "string.chop()",
          back: "removes the last character", id: 1, order: 1 },
        { front: "string.chomp()",
          back: "removes blank space and carriage returns from the end", id: 2, order: 2 },
        { front: "array.join()",
          back: "concats an array into a string", id: 3, order: 3 },
        { front: "array.reverse()",
          back: "reverses order of array elements", id: 4, order: 4 },
        { front: "array.shuffle()",
          back: "randomizes order of elements", id: 5, order: 5 },
        { front: "float.ceil()",
          back: "rounds up to integer", id: 6, order: 6 },
        { front: "array.unshift()",
          back: "takes an argument and adds it to the beginning of the array", id: 7, order: 7 },
        { front: "array.pop()",
          back: "removes the last element of the array and returns it", id: 8, order: 8 },
        { front: "array.length()",
          back: "returns the number of elements in the array", id: 9, order: 9 },
        { front: "array.shift()",
          back: "removes the first element of the array and returns it", id: 10, order: 10 }
      ]
    },
    { name: "JavaScript", id: 2, cardCounter: 11,
      cards: [
        { front: "parseFloat()",
          back: "Parses a string and returns a floating point number", id: 1, order: 1 },
        { front: "parseInt()",
          back: "Parses a string and returns an integer", id: 2, order: 2 },
        { front: "toExponential()",
          back: "Converts a number to exponential notation", id: 3, order: 3 },
        { front: "concat()",
          back: "Combines the text of two or more strings and returns a new string", id: 4, order: 4 },
        { front: "alert()",
          back: "Opens a dialog box and returns undefined", id: 5, order: 5 },
        { front: "confirm()",
          back: "Opens a dialog box and returns a boolean", id: 6, order: 6 },
        { front: "prompt()",
          back: "Opens a dialog box and returns a string", id: 7, order: 7 },
        { front: "charAt()",
          back: "Returns the specified character from a string", id: 8, order: 8 },
        { front: "join()",
          back: "Joins all elements of an array into a string", id: 9, order: 9 },
        { front: "pop()",
          back: "Removes the last element from an array and returns that element", id: 10, order: 10 }
      ]
    },
    { name:"Spanish", id: 3, cardCounter: 11,
      cards: [
        { front: "Hola",
          back: "Hello", id:1, order: 1 },
        { front: "Adios",
          back: "Goodbye", id:2, order: 2 },
        { front: "Comida",
          back: "Food", id:3, order: 3 },
        { front: "Almuerza",
          back: "Lunch", id:4, order: 4 },
        { front: "Los zapatos",
          back: "Shoes", id:5, order: 5 },
        { front: "La ardilla",
          back: "Squirrel", id:6, order: 6 },
        { front: "La cama",
          back: "The bed", id:7, order: 7 },
        { front: "La almohada",
          back: "The pillow", id:8, order: 8 },
        { front: "La pintura",
          back: "Painting", id:9, order: 9 },
        { front: "La panaderia",
          back: "Bakery", id:10, order: 10 }
      ]
    },
    { name:"Non-technical Interview Questions", id:4, cardCounter: 17,
      cards: [
        { front: "Why did you get into programming?",
          back: "Provide a short overview, segue into a problem, and then give a solution.", id:1, order: 1 },
        { front: "What made you pick Epicodus?",
          back: "Overview, problem, solution.", id:2, order: 2 },
        { front: "Where do you see yourself in the future?",
          back: "Try to relate your future to your job.", id:3, order: 3 },
        { front: "Tell me about yourself.  What's your background?",
          back: "Do your best to relate your background to your job of interest.", id:4, order: 4 },
        { front: "What problems do you see with current web development tools?",
          back: "Overview. Problem. Solution", id:5, order: 5 },
        { front: "What do you like about current Web development trends?",
          back: "Make answer relevant to trends your job of interest uses.", id:6, order: 6 },
        { front: "Do you write JavaScript or rely more on libraries like jQuery?",
          back: "Try to show how you are capable of both.", id:7, order: 7 },
        { front: "What frameworks have you used?",
          back: "Ember, Angular, etc.", id:8, order: 8 },
        { front: "What testing tools have you used?",
          back: "Rspec, Mocha", id:9, order: 9 },
        { front: "Are you familiar with Markdown/HAML/SASS?",
          back: "Markdown: text-to-HTML conversion tool / HAML: lightwt markup lang / SASS: CSS ext", id:10, order: 10 },
        { front: "Why do you want to work here?",
          back: "Overview. Problem. Solution.", id:11, order: 11 },
        { front: "What questions do you have for me?",
          back: "Ask three or more questions about practices, tools, and culture.", id:12, order: 12 },
        { front: "What kind of culture do you want in your workspace?",
          back: "Try to link this to what you know about their culture and what you want.", id:13, order: 13 },
        { front: "What are some of the challenges you faced while pairing?",
          back: "Overview. Problem. Solution.", id:14, order: 14 },
        { front: "Give an example of how you resolved a disagreement with your pair.",
          back: "Overview. Problem. Soltuion.", id:15, order: 15 },
        { front: "Tell me about the intern project you worked on.",
          back: "Try to relate your story to the project of interest.", id:16, order: 16 }
      ]
    },
    { name:"Technical Interview Questions", id:5, cardCounter: 36,
      cards: [
        { front: "What is Rails and why use it?",
          back: "Ruby on Rails is a framework that favors convention over configuration.  This allows you to get something up and running with very little effort.",
          id:1, order: 1 },
        { front: "Name every database association relationship.",
          back: "", id:2, order: 2 },
        { front: "What is an ORM?",
          back: "Object-relational mapping, a technique for converting data between incompatible type systems.", id:3, order: 3 },
        { front: "What is a migration?",
          back: "", id:4, order: 4 },
        { front: "What is a router?",
          back: "", id:5, order: 5 },
        { front: "What is the difference between a POST request and a GET request?",
          back: "", id:6, order: 6 },
        { front: "What is Git and why would you use it?",
          back: "", id:7, order: 7 },
        { front: "What happens when a user logs into a website?",
          back: "", id:8, order: 8 },
        { front: "What is a class?",
          back: "", id:9, order: 9 },
        { front: "What is an object?",
          back: "", id:10, order: 10 },
        { front: "What is a module? How does it differ from a class?",
          back: "", id:11, order: 11 },
        { front: 'What does "self" mean?',
          back: "", id:12, order: 12 },
        { front: "Give an example of recursion.",
          back: "", id:13, order: 13 },
        { front: "What is unit testing?",
          back: "", id:14, order: 14 },
        { front: "What is integration testing?",
          back: "", id:15, order: 15 },
        { front: "Why use a module? Give an example.",
          back: "", id:16, order: 16 },
        { front: "What are gems?",
          back: "", id:17, order: 17 },
        { front: 'How does "redirect_to" differ from "render"?',
          back: "", id:18, order: 18 },
        { front: "What happens when a user types in a URL?",
          back: "", id:19, order: 19 },
        { front: 'Explain what "has_many" is and what happens when it is run.',
          back: "", id:20, order: 20 },
        { front: 'What does the "." in "git add ." mean?',
          back: "", id:21, order: 21 },
        { front: "What is string interpolation?",
          back: "", id:22, order: 22 },
        { front: "How does a local variable differ from an instance variable?",
          back: "", id:23, order: 23 },
        { front: "What is a foreign key?",
          back: "", id:24, order: 24 },
        { front: "What is a callback in Active Record?",
          back: "", id:25, order: 25 },
        { front: 'When would you use "has_many :through"?',
          back: "", id:26, order: 26 },
        { front: "What is a polymorphic relationship?",
          back: "", id:27, order: 27 },
        { front: "What is nil?",
          back: "", id:28, order: 28 },
        { front: 'How does "false" differ from "nil"?',
          back: "", id:29, order: 29 },
        { front: "What is REST?",
          back: "", id:30, order: 30 },
        { front: "What is a partial?",
          back: "", id:31, order: 31 },
        { front: "What does rake do?",
          back: "", id:32, order: 32 },
        { front: "What is Bundler?",
          back: "", id:33, order: 33 },
        { front: "Explain how a Rails app is structured and why it's a good framework for web apps.",
          back: "", id:34, order: 34 },
        { front: "How do you decide what logic should reside in the models vs. controllers?",
          back: "", id:35, order: 35 }
      ]
    }
  ];
  factory.decks.forEach( function(deck) {
    deck.cards.forEach( function(card) {
      card.chance = 1;
      card.hardness = ""
    });
  });
  factory.addCard = function(deck, front, back) {
    deck.cards.push({front: front, back: back, id: deck.cardCounter, order: (deck.cards.length + 1), chance: 1, hardness: "" });
    deck.cardCounter += 1;
  };
  factory.removeCard = function(card, deck) {
    var index = deck.cards.indexOf(card);
    var indexToDelete = index;
    while (deck.cards[index + 1] != null) {
      deck.cards[index + 1].order -= 1;
      index += 1;
    }
    deck.cards.splice(indexToDelete, 1);
  };
  factory.addDeck = function() {
    var newDeck = {name: "New Deck", id: factory.counter, cardCounter: 1, cards: []};
    factory.counter += 1;
    factory.decks.push(newDeck);
    // factory.decks.$loaded();
    return newDeck;
  };
  factory.removeDeck = function(deck) {
    var index = factory.decks.indexOf(deck);
    factory.decks.splice(index, 1);
    $state.go("home");
  }
  return factory;
});
