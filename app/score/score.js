angular.module('typeget.score', [])
	.controller('scoreCon', [ '$scope', function($scope){
		$scope.score = [{
			score: $scope.playerScore
		}]
	}
])