"use strict";

config.$inject = ['$routeProvider'];

function config($routeProvider) {

  $routeProvider.when('/game1', {
    templateUrl : 'app/game/game.html',
    controller : 'Game1Ctrl',
  }).when('/game2', {
    templateUrl : 'app/game/game.html',
    controller : 'Game2Ctrl',
  })
  .otherwise({redirectTo: '/game1'});

}
