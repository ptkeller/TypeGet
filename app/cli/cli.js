angular.module('typeget.cli', [])

  .controller('cliController', ['$scope', '$http', '$timeout','$location','$rootScope', function($scope, $http, $timeout, $location, $rootScope){
  	$scope.method = 'GET';
    $scope.url = 'randomword.setgetgo.com/get.php';
    $scope.gameword = {word: null};
    $scope.givenword = {ranword: null};
    $scope.timeSet = 60;
    $rootScope.playerScore = 0;
    // $scope.wpm = $rootScope.playerScore/60;
    $scope.fetch = function() {
      $scope.code = null;
      $scope.response = null;

      $http({method: $scope.method, url: $scope.url, headers: {
   'Content-Type': 'jsonp'
 }}).
        then(function(response) {
          $scope.status = response.status;
          $scope.givenword.ranword = response.data;
        }, function(response) {
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
      });
    };

    $scope.gameWord = function(){
      var expected = $scope.gameword.word;
      // var given = $scope.givenword.ranword;
      var given = $scope.givenword.ranword.substring(0, $scope.givenword.ranword.length -2);
      console.log(given.length, expected.length);
      if(expected === given){
        $rootScope.playerScore++;
        console.log($scope.playerScore)
        $scope.fetch();
        $scope.gameword.word = null;
        console.log('ITS NOT BOKRED!!!!!!!!!!!!!1 360 NO SCOPE MLG STATUS')
      }else{
        console.log('its really borked')
      }
      }
      $scope.Timer = function(){
        $scope.timeSet--;
        if ($scope.timeSet >= 0) {
          console.log($scope.timeSet)
          $timeout($scope.Timer, 1000)
          }
        else {
            $location.path('/gameover')
        }
    }


}])
