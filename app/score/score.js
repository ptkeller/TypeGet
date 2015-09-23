angular.module('typeget.score', [])
	.controller('scoreCon', [ '$scope','$rootScope', function($scope, $rootScope){
		$scope.score = [{
			score: $rootScope.playerScore
		}]
	}
])