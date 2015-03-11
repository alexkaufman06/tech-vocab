techVocab.controller('CardCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'UtilityFactory',
  'AppFactory',
  function CardCtrl($scope, $state, $stateParams, UtilityFactory, AppFactory){

    $scope.UtilityFactory = UtilityFactory;
    $scope.deck = UtilityFactory.findById(AppFactory.decks, $stateParams.deckId);
    $scope.card = UtilityFactory.findById($scope.deck.cards, $stateParams.cardId);

    $scope.nextCard = function() {
      $state.go('card', { cardId: ($scope.card.id + 1) });
    }

    // $scope.handleKeyEvent = function(event) {
    //   console.log('handling it!')
    //   if (event.which === 78) {
    //     // var nextCardState = card({ deckId: $scope.deck.id, cardId: ($scope.card.id + 1)})
    //     $scope.nextCard();
    //   }
    // }
}]);
