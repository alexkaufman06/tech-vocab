techVocab.controller('NavbarCtrl', function NavbarCtrl ($scope, $state, AppFactory){
  $scope.AppFactory = AppFactory;
  $scope.decks = AppFactory.decks;
  $scope.createDeck = function() {
    var newDeck = AppFactory.addDeck();
    $state.go('deck', {deckId: newDeck.id});
  };
});
