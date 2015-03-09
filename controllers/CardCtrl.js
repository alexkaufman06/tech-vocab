techVocab.controller('CardCtrl', ['$scope', '$state', 'LinkFactory',
function LinkCtrl($scope, $state, CardFactory){
  $scope.cards = CardFactory.cards;
  $scope.CardFactory = CardFactory;
}]);
