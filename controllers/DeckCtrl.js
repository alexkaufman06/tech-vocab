techVocab.controller('DeckCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'UtilityFactory',
  'AppFactory',
  function DeckCtrl($scope, $state, $stateParams, UtilityFactory, AppFactory){

    $scope.deleteCard = AppFactory.deleteCard;
    $scope.deleteDeck = AppFactory.deleteDeck;
    $scope.deck = UtilityFactory.findById(AppFactory.decks, $stateParams.deckId);
    $scope.createCard = function () {
      AppFactory.addCard($scope.deck, $scope.newFront, $scope.newBack);
      $scope.newFront = "";
      $scope.newBack = "";
    };
  }
]);
