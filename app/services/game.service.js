"use strict";

angular.module('vbPointTracker')
  .service( 'GameService', GameService);

// Generic ListService that contains store
// list and methods for adding, removing, etc.
function GameService() {
  var homeScore=0, opponentScore=0;

  var service = {
    homeScore: homeScore,
    opponentScore: opponentScore
  };
