"use strict";

HomeCtrl.$inject = [];

function HomeCtrl() {

  console.log('entering Home Ctrl');

}

angular.module('vbPointTracker')
        .config(config)
        .controller( 'HomeCtrl', HomeCtrl );
