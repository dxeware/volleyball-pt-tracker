"use strict";

function resetGameInfo (gameInfo) {
  gameInfo.players = [
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

  gameInfo.homeScore = 0;
  gameInfo.opponentScore = 0;
}

function updatePlayerPoints (game, increment) {
  for (var i = 0; i < game.gameInfo.players.length; i++) {
    if ( game.gameInfo.players[i].playing === true ) {
      game.gameInfo.players[i].points += increment;
    }
  }
}

function initializeGame($scope, gameNum) {
  $scope.gameInfo = {};

  if (null === JSON.parse( localStorage.getItem( gameNum ) ) ) {
    resetGameInfo($scope.gameInfo);
  } else {
   $scope.gameInfo = JSON.parse( localStorage.getItem( gameNum ) );
  }
}

function reset($scope, gameNum) {
  resetGameInfo($scope.gameInfo);
  localStorage.setItem( gameNum, JSON.stringify( $scope.gameInfo ) );
}

function adjustHome($scope, gameNum, increment) {
  $scope.gameInfo.homeScore += increment;

  // Only increment if its a lead score point
  if ($scope.gameInfo.homeScore > $scope.gameInfo.opponentScore) {
    updatePlayerPoints($scope, increment);
  }
  localStorage.setItem( gameNum, JSON.stringify( $scope.gameInfo ) );
}

function adjustOpponent($scope, gameNum, increment) {
  $scope.gameInfo.opponentScore += increment;

  // Only increment if its a lead score point
  if ($scope.gameInfo.opponentScore > $scope.gameInfo.homeScore) {
    updatePlayerPoints($scope, increment);
  }
  localStorage.setItem( gameNum, JSON.stringify( $scope.gameInfo ) );
}

Game1Ctrl.$inject = ['$scope'];

function Game1Ctrl($scope) {

  var gameNum = 'game1';

  initializeGame($scope, gameNum);

  $scope.reset = function() {
    reset($scope, gameNum); 
  };

  $scope.adjustHomeScore = function(increment) {
    adjustHome($scope, gameNum, increment); 
  };

  $scope.adjustOpponentScore = function(increment) {
    adjustOpponent($scope, gameNum, increment); 
  }; 
}

Game2Ctrl.$inject = ['$scope'];

function Game2Ctrl($scope) {
  
  var gameNum = 'game2';

  initializeGame($scope, gameNum);

  $scope.reset = function() {
    reset($scope, gameNum); 
  };

  $scope.adjustHomeScore = function(increment) {
    adjustHome($scope, gameNum, increment); 
  };

  $scope.adjustOpponentScore = function(increment) {
    adjustOpponent($scope, gameNum, increment); 
  }; 
}

angular.module('vbPointTracker')
        .config(config)
        .controller( 'Game1Ctrl', Game1Ctrl )
        .controller( 'Game2Ctrl', Game2Ctrl );

