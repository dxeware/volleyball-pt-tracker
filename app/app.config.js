"use strict";

//config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/home'});
// }]);

config.$inject = ['$routeProvider'];

function config($routeProvider) {

  $routeProvider.when('/game1', {
    templateUrl : 'app/game/game1.html',
    controller : 'Game1Ctrl',
  }).when('/game2', {
    templateUrl : 'app/game/game2.html',
    controller : 'Game2Ctrl',
  })
  .otherwise({redirectTo: '/game1'});

}
