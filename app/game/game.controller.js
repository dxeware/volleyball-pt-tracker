"use strict";

function updatePlayerPoints (vm, increment) {
  for (var i = 0; i < vm.players.length; i++) {
    if ( vm.players[i].playing === true ) {
      vm.players[i].points += increment;
    }
  }
}

GameCtrl.$inject = ['$location'];

function GameCtrl($location) {
  var vm = this;

  vm.players = [
    { name: 'Kate',
      number: '21',
      points: 0,
      playing: false
    },
    { name: 'Molly',
      number: '9',
      points: 0,
      playing: false
    },
    { name: 'Madeline',
      number: '15',
      points: 0,
      playing: false
    },
    { name: 'Tiana',
      number: '1',
      points: 0,
      playing: false
    },
    { name: 'Kennedy',
      number: '17',
      points: 0,
      playing: false
    },
    { name: 'Roane',
      number: '3',
      points: 0,
      playing: false
    },
    { name: 'Katiya',
      number: '22',
      points: 0,
      playing: false
    },
    { name: 'Tristen',
      number: '13',
      points: 0,
      playing: false
    },
    { name: 'Vivian',
      number: '12',
      points: 0,
      playing: false
    },
    { name: 'Sydney',
      number: '23',
      points: 0,
      playing: false
    }
  ];

  vm.homeScore = 0;
  vm.opponentScore = 0;

  vm.adjustHomeScore = function(increment) {
    vm.homeScore += increment;

    updatePlayerPoints(vm, increment);

  };

  vm.adjustOpponentScore = function(increment) {
    vm.opponentScore += increment;

    updatePlayerPoints(vm, increment);

  };
}

angular.module('vbPointTracker')
        .controller( 'GameCtrl', GameCtrl );

