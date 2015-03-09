var techVocab = angular.module('techVocab', ['ui.router', 'firebase']);

techVocab.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });
});
