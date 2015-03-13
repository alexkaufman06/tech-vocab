techVocab.controller('CardCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'UtilityFactory',
  'AppFactory',
  function CardCtrl($scope, $state, $stateParams, UtilityFactory, AppFactory){

    $scope.deck = UtilityFactory.findById(AppFactory.decks, $stateParams.deckId);
    $scope.card = UtilityFactory.findByOrder($scope.deck.cards, $stateParams.cardOrder);

    var totalCards = $scope.deck.cards.length;

    $scope.nextCard = function() {
      if ($scope.card.order + 1 > totalCards ) {
        $state.go('card', { cardOrder: 1 });
      } else {
        $state.go('card', { cardOrder: ($scope.card.order + 1) });
      }
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
        $state.go('card', { cardOrder: (pickCard.order) });
      }
    }

    $scope.easyCard = function() {
      debugger;
      $scope.card.hardness = "Easy";
      $scope.card.chance = $scope.card.chance / 2;
      $scope.cardPicker();
    };
    $scope.mediumCard = function() {
      $scope.card.hardness = "Medium";
      $scope.cardPicker();
    };
    $scope.hardCard = function() {
      $scope.card.hardness = "Hard";
      $scope.card.chance = $scope.card.chance * 2;
      $scope.cardPicker();
    };
    $('body').off();
    angular.element(window).off();
    angular.element(window).on('keydown', function(key) {
      if (key.keyCode === 99) {
        $scope.hardCard();
      } else if (key.keyCode === 98) {
        $scope.mediumCard();
      } else if (key.keyCode === 97) {
        $scope.easyCard();
      } else if (key.keyCode === 96) {
        $scope.nextCard();
      } else if (key.keyCode === 51) {
        $scope.hardCard();
      } else if (key.keyCode === 50) {
        $scope.mediumCard();
      } else if (key.keyCode === 49) {
        $scope.easyCard();
      } else if (key.keyCode === 48) {
        $scope.nextCard();
      } else if (key.keyCode === 32) {
        angular.element('.flipper').trigger('click');
      }
    });
}]);
