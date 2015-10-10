angular.module('typeget.score', ['firebase'])
	.controller('scoreCon', [ '$scope','$location','$rootScope','$firebase', function($scope, $location, $rootScope, $firebase){
		$scope.score = [{
			score: $rootScope.playerScore
		}]

		$scope.players = {
			player: null
		}

		$scope.reload = function(){
			$location.path('/');
		};
		
		var ref = new Firebase('https://typeget.firebaseio.com/')
		$scope.leadAdd = function(){
			var playerRef = ref.child('playerBase');
			playerRef.push({
				player: $scope.players.player,
				score: $rootScope.playerScore
			})			
		
		
		var playerBox = [];
		
		ref.once("value", function(snapshot) {
		  var playerDb = snapshot.val();
		  for(var eachPlayer in playerDb){
		  	var playStats = playerDb[eachPlayer];
		  	for(var stat in playStats){
		 	console.log(playStats[stat].player, playStats[stat].score)
				playerBox.push(playStats[stat])
				for(var i = 0; i < playerBox.length; i++){
					
						$('.playernames').text(playerBox[i].player)
						$('.andtheirscores').text(playerBox[i].score)
					
				}
		  	}
		  }
		}, function (errorObject) {
  			console.log("The read failed: " + errorObject.code);
		});

		}

}])