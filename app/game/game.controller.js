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

Game1Ctrl.$inject = ['$scope'];

function Game1Ctrl($scope) {
  //var game1 = this;

  $scope.gameInfo = {};

  if (null === JSON.parse( localStorage.getItem( "game1" ) ) ) {
    resetGameInfo($scope.gameInfo);
  } else {
   $scope.gameInfo = JSON.parse( localStorage.getItem( "game1" ) );
   //console.log(JSON.parse( localStorage.getItem( "game1" ) ) );
  }

  $scope.reset = function() {
    resetGameInfo($scope.gameInfo);
    localStorage.setItem( "game1", JSON.stringify( $scope.gameInfo ) );
  }

  $scope.adjustHomeScore = function(increment) {
    $scope.gameInfo.homeScore += increment;

    // Only increment if its a lead score point
    if ($scope.gameInfo.homeScore > $scope.gameInfo.opponentScore) {
      updatePlayerPoints($scope, increment);
    }
    localStorage.setItem( "game1", JSON.stringify( $scope.gameInfo ) );
    //console.log(JSON.parse( localStorage.getItem( "game1" ) ) );

  };

  $scope.adjustOpponentScore = function(increment) {
    $scope.gameInfo.opponentScore += increment;

    // Only increment if its a lead score point
    if ($scope.gameInfo.opponentScore > $scope.gameInfo.homeScore) {
      updatePlayerPoints($scope, increment);
    }
    localStorage.setItem( "game1", JSON.stringify( $scope.gameInfo ) );
    //console.log(JSON.parse( localStorage.getItem( "game1" ) ) );

  };
}

Game2Ctrl.$inject = ['$scope'];

function Game2Ctrl($scope) {
  //var game1 = this;

  $scope.gameInfo = {};

  if (null === JSON.parse( localStorage.getItem( "game2" ) ) ) {
    resetGameInfo($scope.gameInfo);
  } else {
   $scope.gameInfo = JSON.parse( localStorage.getItem( "game2" ) );
   //console.log(JSON.parse( localStorage.getItem( "game2" ) ) );
  }

  $scope.reset = function() {
    resetGameInfo($scope.gameInfo);
    localStorage.setItem( "game2", JSON.stringify( $scope.gameInfo ) );
  }

  $scope.adjustHomeScore = function(increment) {
    $scope.gameInfo.homeScore += increment;

    // Only increment if its a lead score point
    if ($scope.gameInfo.homeScore > $scope.gameInfo.opponentScore) {
      updatePlayerPoints($scope, increment);
    }
    localStorage.setItem( "game2", JSON.stringify( $scope.gameInfo ) );

  };

  $scope.adjustOpponentScore = function(increment) {
    $scope.gameInfo.opponentScore += increment;

    // Only increment if its a lead score point
    if ($scope.gameInfo.opponentScore > $scope.gameInfo.homeScore) {
      updatePlayerPoints($scope, increment);
    }
    localStorage.setItem( "game2", JSON.stringify( $scope.gameInfo ) );

  };
}

angular.module('vbPointTracker')
        .config(config)
        .controller( 'Game1Ctrl', Game1Ctrl )
        .controller( 'Game2Ctrl', Game2Ctrl );

