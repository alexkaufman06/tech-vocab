techVocab.factory("AppFactory", function AppFactory($firebaseArray, $state) {
  factory = {};
  // var ref = new Firebase("https://epicodusflashcards.firebaseio.com");
  // var sync = $firebaseArray(ref);
  // factory.decks = sync;


  factory.counter = 6 // the counter starts with the first non hard-coded id number

  factory.decks = [
    { name: "Ruby Methods", id:1, cardCounter: 11,
      cards: [
        {front: "string.chop()",
          back: "removes the last character", id:1, difficulty:"medium" },
        {front: "string.chomp()",
          back: "removes blank space and carriage returns from the end", id:2, difficulty:"medium" },
        {front: "array.join()",
          back: "concats an array into a string", id:3, difficulty:"medium" },
        {front: "array.reverse()",
          back: "reverses order of array elements", id:4, difficulty:"medium" },
        {front: "array.shuffle()",
          back: "randomizes order of elements", id:5, difficulty:"medium" },
        {front: "float.ceil()",
          back: "rounds up to integer", id:6, difficulty:"medium" },
        {front: "array.unshift()",
          back: "takes an argument and adds it to the beginning of the array", id:7, difficulty:"medium" },
        {front: "array.pop()",
          back: "removes the last element of the array and returns it", id:8, difficulty:"medium" },
        {front: "array.length()",
          back: "returns the number of elements in the array", id:9, difficulty:"medium" },
        {front: "array.shift()",
          back: "removes the first element of the array and returns it", id:10, difficulty:"medium" }
      ]
    },
    { name:"JavaScript", id:2, cardCounter: 11,
        cards: [
          {front: "parseFloat()",
            back: "Parses a string and returns a floating point number", id:1, difficulty:"medium" },
          {front: "parseInt()",
            back: "Parses a string and returns an integer", id:2, difficulty:"medium" },
          {front: "toExponential()",
            back: "Converts a number to exponential notation", id:3, difficulty:"medium" },
          {front: "concat()",
            back: "Combines the text of two or more strings and returns a new string", id:4, difficulty:"medium" },
          {front: "alert()",
            back: "Opens a dialog box and returns undefined", id:5, difficulty:"medium" },
          {front: "confirm()",
            back: "Opens a dialog box and returns a boolean", id:6, difficulty:"medium" },
          {front: "prompt()",
            back: "Opens a dialog box and returns a string", id:7, difficulty:"medium" },
          {front: "charAt()",
            back: "Returns the specified character from a string", id:8, difficulty:"medium" },
          {front: "join()",
            back: "Joins all elements of an array into a string", id:9, difficulty:"medium" },
          {front: "pop()",
            back: "Removes the last element from an array and returns that element", id:10, difficulty:"medium" }
        ]
      },
    { name:"Spanish", id:3, cardCounter: 11,
        cards: [
          {front: "Hola",
            back: "Hello", id:1, difficulty:"medium" },
          {front: "Adios",
            back: "Goodbye", id:2, difficulty:"medium" },
          {front: "Comida",
            back: "Food", id:3, difficulty:"medium" },
          {front: "Almuerza",
            back: "Lunch", id:4, difficulty:"medium" },
          {front: "Los zapatos",
            back: "Shoes", id:5, difficulty:"medium" },
          {front: "La ardilla",
            back: "Squirrel", id:6, difficulty:"medium" },
          {front: "La cama",
            back: "The bed", id:7, difficulty:"medium" },
          {front: "La almohada",
            back: "The pillow", id:8, difficulty:"medium" },
          {front: "La pintura",
            back: "Painting", id:9, difficulty:"medium" },
          {front: "La panaderia",
            back: "Bakery", id:10, difficulty:"medium" }
        ]
      },
      { name:"Non-technical Interview Questions", id:4,
          cards: [
            {front: "Why did you get into programming?",
              back: "Try and give a short overview, segue into a problem, and then give a solution!", id:1, difficulty:"medium" },
            {front: "What made you pick Epicodus?",
              back: "Overview, problem, solution.", id:2, difficulty:"medium" },
            {front: "Where do you see yourself in the future?",
              back: "Try and relate your future to your job.", id:3, difficulty:"medium" },
            {front: "Tell me about yourself.  What's your background?",
              back: "Do your best to relate your background to your job of interest.", id:4, difficulty:"medium" },
            {front: "What problems do you see with current web development tools?",
              back: "Overview. Problem. Solution", id:5, difficulty:"medium" },
            {front: "What do you like about current web development trends?",
              back: "Relate to trends your job of interest uses", id:6, difficulty:"medium" },
            {front: "Do you write JavaScript or rely more on libraries like jQuery?",
              back: "Try and show how you are capable of both?", id:7, difficulty:"medium" },
            {front: "What frameworks have you used?",
              back: "Ember, Angular...", id:8, difficulty:"medium" },
            {front: "What testing tools have you used?",
              back: "Rspec, Mocha", id:9, difficulty:"medium" },
            {front: "Are you familiar with HAML/SASS/Markdown?",
              back: "HAML- lightweight markup language SASS- a CSS extension Markdown- text to HTML conversion tool", id:10, difficulty:"medium" },
            {front: "Why do you want to work here?",
              back: "Overview. Problem. Solution.", id:11, difficulty:"medium" },
            {front: "What questions do you have for me?",
              back: "Ask about their practices, tools and culture - have three or so questions ready for them.", id:12, difficulty:"medium" },
            {front: "What kind of culture do you want in your workspace?",
              back: "Try and link this to what you know about their culture and what you want.", id:13, difficulty:"medium" },
            {front: "What are some of the challenges you faced while pairing?",
              back: "Overview. Problem. Solution.", id:14, difficulty:"medium" },
            {front: "Give an example of how you resolved a disagreement with your pair.",
              back: "Overview. Problem. Soltuion.", id:15, difficulty:"medium" },
            {front: "Tell me about the intern project you worked on.",
              back: "Try and relate your story to the project of interest.", id:16, difficulty:"medium" }
          ]
        },
        { name:"Technical Interview Questions", id:5,
            cards: [
              {front: "What is Rails and why use it?",
                back: "", id:1, difficulty:"medium" },
              {front: "Name every database association relationship.",
                back: "", id:2, difficulty:"medium" },
              {front: "What is an ORM?",
                back: "", id:3, difficulty:"medium" },
              {front: "What is a migration?",
                back: "", id:4, difficulty:"medium" },
              {front: "What is a router",
                back: "", id:5, difficulty:"medium" },
              {front: "What is the difference between a POST request and a GET request?",
                back: "", id:6, difficulty:"medium" },
              {front: "What is Git and why would you use it?",
                back: "", id:7, difficulty:"medium" },
              {front: "What happens when a user logs into a website?",
                back: "", id:8, difficulty:"medium" },
              {front: "What is a class?",
                back: "", id:9, difficulty:"medium" },
              {front: "What is an object?",
                back: "", id:10, difficulty:"medium" },
              {front: "What is a module? How's it differ from a class?",
                back: "", id:11, difficulty:"medium" },
              {front: "What does self mean?",
                back: "", id:12, difficulty:"medium" },
              {front: "Give an example of recursion.",
                back: "", id:13, difficulty:"medium" },
              {front: "What is unit testing?",
                back: "", id:14, difficulty:"medium" },
              {front: "What is integration testing?",
                back: "", id:15, difficulty:"medium" },
              {front: "Why use a module? Give an example",
                back: "", id:16, difficulty:"medium" },
              {front: "What are gems?",
                back: "", id:17, difficulty:"medium" },
              {front: "How do redirect and reder differ?",
                back: "", id:18, difficulty:"medium" },
              {front: "What happens when a user types in a URL?",
                back: "", id:19, difficulty:"medium" },
              {front: "Explain what has_many is and what happens when it is run.",
                back: "", id:20, difficulty:"medium" },
              {front: "What does the. in git add . mean?",
                back: "", id:21, difficulty:"medium" },
              {front: "What is string interpolation?",
                back: "", id:22, difficulty:"medium" },
              {front: "How do local and instance variables differ?",
                back: "", id:23, difficulty:"medium" },
              {front: "What is a foreign key?",
                back: "", id:24, difficulty:"medium" },
              {front: "What is a callback in Active Record?",
                back: "", id:25, difficulty:"medium" },
              {front: "When would you use has_many :through?",
                back: "", id:26, difficulty:"medium" },
              {front: "What is a polymorphic relationship?",
                back: "", id:27, difficulty:"medium" },
              {front: "What is nil?",
                back: "", id:28, difficulty:"medium" },
              {front: "How does false differ from nil?",
                back: "", id:29, difficulty:"medium" },
              {front: "What is REST?",
                back: "", id:30, difficulty:"medium" },
              {front: "What is a partial?",
                back: "", id:31, difficulty:"medium" },
              {front: "What does rake do?",
                back: "", id:32, difficulty:"medium" },
              {front: "What is Bundler?",
                back: "", id:33, difficulty:"medium" },
              {front: "Pretend I'm another programmer who has never used Rails - explain to me how a Rails app is structured, and why it's a good framework for web apps.",
                back: "", id:34, difficulty:"medium" },
              {front: "How do you decide what logic should reside in the models vs. controllers?",
                back: "", id:35, difficulty:"medium" }
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
  };
  factory.deleteDeck = function(deck) {
    var index = factory.decks.indexOf(deck);
    factory.decks.splice(index, 1);
    $state.go("home");
  }
  return factory;
});
