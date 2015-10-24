"use strict";

function updatePlayerPoints (game, increment) {
  for (var i = 0; i < game.gameInfo.players.length; i++) {
    if ( game.gameInfo.players[i].playing === true ) {
      game.gameInfo.players[i].points += increment;
    }
  }
}

Game1Ctrl.$inject = ['$scope'];

function Game1Ctrl($scope) {
  //var game1 = this;

  $scope.gameInfo = {};

  $scope.gameInfo.players = [
    { name: 'Kate',
      number: '21',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Katiya',
      number: '22',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Kennedy',
      number: '17',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Madeline',
      number: '15',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Molly',
      number: '9',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Roane',
      number: '3',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Sydney',
      number: '23',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Tiana',
      number: '1',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Tristen',
      number: '13',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Vivian',
      number: '12',
      points: 0,
      playing: false,
      served: false
    },

  ];

  $scope.gameInfo.homeScore = 0;
  $scope.gameInfo.opponentScore = 0;

  $scope.adjustHomeScore = function(increment) {
    $scope.gameInfo.homeScore += increment;

    updatePlayerPoints($scope, increment);

  };

  $scope.adjustOpponentScore = function(increment) {
    $scope.gameInfo.opponentScore += increment;

    updatePlayerPoints($scope, increment);

  };
}

Game2Ctrl.$inject = ['$scope'];

function Game2Ctrl($scope) {
  //var game1 = this;

  $scope.gameInfo = {};

  $scope.gameInfo.players = [
    { name: 'Kate',
      number: '21',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Katiya',
      number: '22',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Kennedy',
      number: '17',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Madeline',
      number: '15',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Molly',
      number: '9',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Roane',
      number: '3',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Sydney',
      number: '23',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Tiana',
      number: '1',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Tristen',
      number: '13',
      points: 0,
      playing: false,
      served: false
    },
    { name: 'Vivian',
      number: '12',
      points: 0,
      playing: false,
      served: false
    },

  ];

  $scope.gameInfo.homeScore = 0;
  $scope.gameInfo.opponentScore = 0;

  $scope.adjustHomeScore = function(increment) {
    $scope.gameInfo.homeScore += increment;

    updatePlayerPoints($scope, increment);

  };

  $scope.adjustOpponentScore = function(increment) {
    $scope.gameInfo.opponentScore += increment;

    updatePlayerPoints($scope, increment);

  };
}

/*

function GameCtrl($location, GameService) {
  var vm = this;

  var game = {
    players
  }
  vm.players = players;
  vm.test = 0;

  var service = GameService;

  // Map $location.path to Service and url
  // for current store database
  switch ( $location.path() ) {
    case '/game1':
      vm.homeScore = game1HomeScore;
      vm.opponentScore = game1OpponentScore;
      break;
    case '/game2':
      vm.homeScore = game2HomeScore;
      vm.opponentScore = game2OpponentScore;
      break;
    case '/game3':
      vm.homeScore = game3HomeScore;
      vm.opponentScore = game3OpponentScore;
      break;
  }

  vm.adjustHomeScore = function(increment) {
    vm.homeScore += increment;
    vm.test++;

    updatePlayerPoints(vm, increment);

  };

  vm.adjustOpponentScore = function(increment) {
    vm.opponentScore += increment;

    updatePlayerPoints(vm, increment);

  };
}
*/
angular.module('vbPointTracker')
        .controller( 'Game1Ctrl', Game1Ctrl )
        .controller( 'Game2Ctrl', Game2Ctrl );

