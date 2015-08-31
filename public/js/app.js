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
  });
});


// app.config(function($stateProvider) {
//   $stateProvider
//   .state('home', {
//     url: '/',
//     views: {
//       stats: {
//         templateUrl: '../stateViews/stats.html',
//         controller: 'StatsController'
//       },
//       newCard: {
//         templateUrl: '../stateViews/newCard.html',
//         controller: 'NewCardController'
//       },
//       viewCards: {
//         templateUrl: '../stateViews/viewCards.html',
//         controller: 'MainController'
//       }
//     }
//   });
// });
