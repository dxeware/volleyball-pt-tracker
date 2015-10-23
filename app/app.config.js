"use strict";

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    // STATES ========================================
    .state('home', {
      url: '/home',
      templateUrl: './app/home/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    })

    .state('game1', {
      url: '/game1',
      templateUrl: './app/game/game.html',
      controller: 'GameCtrl',
      controllerAs: 'game'
    })

    .state('game2', {
      url: '/game2',
      templateUrl: './app/game/game.html',
      controller: 'GameCtrl',
      controllerAs: 'game'
    })

    .state('game3', {
      url: '/game3',
      templateUrl: './app/game/game.html',
      controller: 'GameCtrl',
      controllerAs: 'game'
    });
}
