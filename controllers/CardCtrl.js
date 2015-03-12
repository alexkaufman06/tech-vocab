techVocab.controller('CardCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'UtilityFactory',
  'AppFactory',
  function CardCtrl($scope, $state, $stateParams, UtilityFactory, AppFactory){

    $scope.deck = UtilityFactory.findById(AppFactory.decks, $stateParams.deckId);
    $scope.card = UtilityFactory.findById($scope.deck.cards, $stateParams.cardId);

    var totalCards = $scope.deck.cards.length;

    $scope.nextCard = function() {
      $state.go('card', { cardId: ($scope.card.id + 1) });
    };

    $scope.cardPicker = function() {
      var chanceSum = 0;
      $scope.deck.cards.forEach( function(card) {
        card.chanceBottom = chanceSum;
        chanceSum += card.chance;
        card.chanceTop = chanceSum;
      });
      var pickNum = Math.random() * chanceSum;
      var pickCard;
      $scope.deck.cards.forEach( function(card) {
        if ((card.chanceTop >= pickNum) && (card.chanceBottom < pickNum)) {
          pickCard = card;
        }
      });
      $scope.practicedCards = 45;
      $state.go('card', { cardId: (pickCard.id) });
    }

    $scope.handleKeyEvent = function(event) {
      if (event.which === 78) {
        $scope.nextCard();
      }
    }
}]);
