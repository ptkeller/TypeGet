angular.module('typeget.logic', [])
	.controller('logicCon', ['$scope', function($scope){
		$scope.gameWord = {
			given: '',
			expected: ''
		  }
		  $scope.gameWord.given = $scope.data;
		  console.log($scope.gameWord)
		  if($scope.gameWord.given === $scope.gameWord.expected){
		  	console.log('its not bokred')
		  }		
	}])