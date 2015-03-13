techVocab.controller('MatchCtrl', function MatchCtrl(
  $scope, $state, $stateParams, UtilityFactory, AppFactory){

    $scope.deck = UtilityFactory.findById(AppFactory.decks, $stateParams.deckId);

    pickedCardNum = Math.ceil(Math.random() * $scope.deck.cards.length);
    $scope.card = UtilityFactory.findByOrder($scope.deck.cards, pickedCardNum);

    var pickOf3 = Math.ceil(Math.random() * 3);

    var wrongCardNum1 = function () {
      var rand = Math.ceil(Math.random() * $scope.deck.cards.length);
      if (rand === pickedCardNum) {rand -= 1;}
      return rand;
    };

    var wrongCardNum2 = function () {
      var rand = Math.ceil(Math.random() * $scope.deck.cards.length);
      if (rand === pickedCardNum) {rand += 1;}
      return rand;
    };

    var wrongCard1 = UtilityFactory.findByOrder($scope.deck.cards, wrongCardNum1());
    var wrongCard2 = UtilityFactory.findByOrder($scope.deck.cards, wrongCardNum2());

    if (pickOf3 === 1) {
      $scope.card1 = $scope.card;
      $scope.card2 = wrongCard1;
      $scope.card3 = wrongCard2;
    } else if (pickOf3 === 2) {
      $scope.card1 = wrongCard1;
      $scope.card2 = $scope.card;
      $scope.card3 = wrongCard2;
    } else if (pickOf3 === 3) {
      $scope.card1 = wrongCard1;
      $scope.card2 = wrongCard2;
      $scope.card3 = $scope.card;
    }

    $scope.cardGuess = function(num) {
      if (num === pickOf3) {
        success.playclip();
        $state.go('match', { deckId:$scope.deck.id }, {reload:true});
      } else {
        fail.playclip();
      }
    }


    // $scope.cardPicker = function() {
    //   lastCard = $scope.card;
    //   var chanceSum = 0;
    //   $scope.deck.cards.forEach( function(card) {
    //     card.chanceBottom = chanceSum;
    //     chanceSum += card.chance;
    //     card.chanceTop = chanceSum;
    //   });
    //   var pickNum = Math.random() * chanceSum;
    //   var pickCard;
    //   $scope.deck.cards.forEach( function(card) {
    //     if ((card.chanceTop >= pickNum) && (card.chanceBottom < pickNum)) {
    //       pickCard = card;
    //     }
    //   });
    //   $scope.practicedCards = 45;
    //   if (lastCard === pickCard) {
    //      $scope.cardPicker();
    //   } else {
    //     $state.go('match', { cardId: (pickCard.id) });
    //   }
    // }


    // $('body').off();
    // angular.element(window).off();
    // angular.element(window).on('keydown', function(key) {
    //   if (key.keyCode === 99) {
    //     $scope.hardCard();
    //   } else if (key.keyCode === 98) {
    //     $scope.mediumCard();
    //   } else if (key.keyCode === 97) {
    //     $scope.easyCard();
    //   } else if (key.keyCode === 96) {
    //     $scope.nextCard();
    //   } else if (key.keyCode === 51) {
    //     $scope.hardCard();
    //   } else if (key.keyCode === 50) {
    //     $scope.mediumCard();
    //   } else if (key.keyCode === 49) {
    //     $scope.easyCard();
    //   } else if (key.keyCode === 48) {
    //     $scope.nextCard();
    //   } else if (key.keyCode === 32) {
    //     angular.element('.flipper').trigger('click');
    //   }
    // });
});
