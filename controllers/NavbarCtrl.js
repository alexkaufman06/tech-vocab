techVocab.controller('NavbarCtrl', function NavbarCtrl ($scope, AppFactory){
  $scope.AppFactory = AppFactory;
  $scope.decks = AppFactory.decks;
});
