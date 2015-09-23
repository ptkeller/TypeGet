angular.module('typeget.timer', [])
	.controller('timeCon', ['$scope', function($scope){
		$scope.timeSet = 60;
		$scope.Timer = function(){
			if($scope.timeSet >= 0){
			setInterval(function(){
				$scope.timeSet--
			}, 1000)
			}
		}

	}])