app.controller('EditCardController', function ($scope, FlashCardsFactory) {
	console.log('this is flashCard', $scope.flashCard);
	$scope.categories = FlashCardsFactory.categories;
	$scope.saveCard = function () {
		FlashCardsFactory.updateCard($scope.card)
		.then(function (updatedCard) {
			$scope.$parent.editing = false;
		});
	};
});