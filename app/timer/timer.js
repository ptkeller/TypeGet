angular.module('typeget.timer', [])
	.controller('timeCon', ['$scope','$timeout', '$location', function($scope, $timeout, $location){
		$scope.win = [{
			winner: 'GAME OVER'
		}]
		
	}])