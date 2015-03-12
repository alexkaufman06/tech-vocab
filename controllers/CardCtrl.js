techVocab.controller('CardCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'UtilityFactory',
  'AppFactory',
  function CardCtrl($scope, $state, $stateParams, UtilityFactory, AppFactory){

    $scope.deck = UtilityFactory.findById(AppFactory.decks, $stateParams.deckId);
    $scope.deck.cards.forEach( function(card) {
      card.chance = 1;
    });

    $scope.card = UtilityFactory.findById($scope.deck.cards, $stateParams.cardId);
    $scope.practicedCards = 0;

    var totalCards = $scope.deck.cards.length;

    $scope.nextCard = function() {
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
      $scope.practicedCards += 1;
      $state.go('card', { cardId: (pickCard.id) });
    }

    $scope.handleKeyEvent = function(event) {
      if (event.which === 78) {
        $scope.nextCard();
      }
    }
}]);
