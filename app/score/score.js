angular.module('typeget.score', [/*'firebase'*/])
	.controller('scoreCon', [ '$scope','$rootScope', function($scope, $rootScope, /*$firebaseObject*/){
		// var scoreFire = new Firebase('https://glaring-inferno-922.firebaseio.com/')

		// var board = $firebaseObject(scoreFire);
		// board.$bindTo($scope, 'data')
		$scope.score = [{
			score: $rootScope.playerScore
		}]
	}
])