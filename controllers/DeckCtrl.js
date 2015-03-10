techVocab.controller('DeckCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'UtilityFactory',
  'AppFactory',
  function DeckCtrl($scope, $state, $stateParams, UtilityFactory, AppFactory){

    $scope.deck = UtilityFactory.findById(AppFactory.decks, $stateParams.deckId);


  }
]);
