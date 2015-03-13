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
    url: "/deck/:deckId/card/:cardOrder",
    templateUrl: "partials/card.html"
  });

  $stateProvider.state('about', {
    url: "/about",
    templateUrl: "partials/about.html"
  });

  $stateProvider.state('contact', {
    url: "/contact",
    templateUrl: "partials/contact.html"
  });

  $stateProvider.state('match', {
    url: "/deck/:deckId/match",
    templateUrl: "partials/match.html"
  });

});
