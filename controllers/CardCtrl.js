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
      lastCard = $scope.card;
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
      if (lastCard === pickCard) {
         $scope.cardPicker();
      } else {
        $state.go('card', { cardId: (pickCard.id) });
      }
    }

    $scope.easyCard = function() {
      $scope.card.chance = $scope.card.chance / 2;
      $scope.cardPicker();
    };
    $scope.mediumCard = function() {
      $scope.cardPicker();
    };
    $scope.hardCard = function() {
      $scope.card.chance = $scope.card.chance * 2;
      $scope.cardPicker();
    };

    $scope.handleKeyEvent = function(event) {
      if (event.which === 78) {
        $scope.nextCard();
      }
    }
}]);
