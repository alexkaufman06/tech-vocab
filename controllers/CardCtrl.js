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
    $('body').off();
    angular.element(window).off();
    angular.element(window).on('keydown', function(key) {
      console.log(key);
      debugger;
      if (key.keyCode === 48 || key.keycode === 96) {
        $scope.nextCard();
      } else if (key.keyCode === 49 || key.keycode === 97) {
        $scope.easyCard();
      } else if (key.keyCode === 50 || key.keycode === 98) {
        $scope.mediumCard();
      } else if (key.keyCode === 51 || key.keycode === 99) {
        $scope.hardCard();
      } else if (key.keyCode === 32) {
        angular.element('.flipper').trigger('click');
      }
    });
}]);
