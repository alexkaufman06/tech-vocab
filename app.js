var techVocab = angular.module('techVocab', ['ui.router', 'firebase']);

techVocab.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('deck', {
    url: "/deck/:deckId",
    templateUrl: "partials/deck.html"
  });

  $stateProvider.state('card', {
    url: "/deck/:deckId/card/:cardId",
    templateUrl: "partials/card.html"
  });
});
