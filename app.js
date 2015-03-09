var techVocab = angular.module('techVocab', ['ui.router']);

techVocab.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });
});
