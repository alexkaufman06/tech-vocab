techVocab.controller('DeckCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'UtilityFactory',
  'AppFactory',
  function DeckCtrl($scope, $state, $stateParams, UtilityFactory, AppFactory){
    angular.element(window).off();
    $scope.deleteCard = AppFactory.deleteCard;
    $scope.deleteDeck = AppFactory.deleteDeck;
    $scope.deck = UtilityFactory.findById(AppFactory.decks, $stateParams.deckId);
    $scope.createCard = function () {
      AppFactory.addCard($scope.deck, $scope.newFront, $scope.newBack);
      $scope.newFront = "";
      $scope.newBack = "";
    };
    $scope.practiceDeck = function(deck) {
      $state.go('card', {deckId: deck.id, cardId: 1});
    };
    $scope.deleteCard = function(card) {
      if (confirm("Delete this card from " + $scope.deck.name + " ?")) {
        AppFactory.removeCard(card, $scope.deck);
      }
    };
    $scope.deleteDeck = function() {
      if (confirm("Delete entire " + $scope.deck.name + " deck ?")) {
      AppFactory.removeDeck($scope.deck);
      }
    };

  }
]);
