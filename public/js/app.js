var app = angular.module('flashCards', ['ui.router']);

app.value('currentFlashCards', []);

app.config(function($stateProvider) {
  $stateProvider
  .state('stats', {
    url: '/stats',
    templateUrl: '../stateViews/stats.html',
    controller: 'StatsController'
  })
  .state('newCard', {
    url: '/newCard',
    templateUrl: '../stateViews/newCard.html',
    controller: 'NewCardController'
  })
  .state('viewCards', {
    url: '/viewCards',
    templateUrl: '../stateViews/viewCards.html',
    controller: 'MainController'
  })
  .state("manageCard", {
    url: "/:id",
    templateUrl: "../stateViews/manageCard.html",
    controller: function($scope, $stateParams, FlashCardsFactory) {
      $scope.params = $stateParams;
      FlashCardsFactory.findFlashCard($stateParams.id)
      .then(function(result) {
        $scope.currCard = result;
      })
    }
  })
  .state("manageCard.edit", {
    // edit flashcard
      url: "/edit",
      templateUrl: "../stateViews/edit.html",
      controller: 'EditCardController'
  })
  .state("manageCard.delete", {
    // delete flashcard
    url: "/delete",
    templateUrl: "../stateViews/delete.html",
    controller: function($scope, FlashCardsFactory, $state) {
      console.log($scope.params.id);
      FlashCardsFactory.deleteCard($scope.params.id)
      .then(function () {
        $state.go('viewCards')
      })

    }
  })
});


