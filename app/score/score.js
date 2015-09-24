angular.module('typeget.score', ['firebase'])
	.controller('scoreCon', [ '$scope','$rootScope', '$firebase', function($scope, $rootScope, $firebase){
		$scope.score = [{
			score: $rootScope.playerScore
		}]

		$scope.players = {
			player: null
		}
		var ref = new Firebase('https://typeget.firebaseio.com/')
		$scope.leadAdd = function(){
			var playerRef = ref.child('playerBase');
			playerRef.push({
				player: $scope.players.player,
				score: $rootScope.playerScore
			})			
		}
		
		
		var playerBox = [];
		ref.once("value", function(snapshot) {
		  var playerDb = snapshot.val();
		  for(var eachPlayer in playerDb){
		  	var playStats = playerDb[eachPlayer];
		  	for(var stat in playStats){
		  		playerBox.push(playStats.stat)
		  		for(var i = 0; i < playerBox.length; i++){
		  			$('.testDiv').html(playerBox[i])
		  		}
		  	}
		  }
		}, function (errorObject) {
  			console.log("The read failed: " + errorObject.code);
		});


}])