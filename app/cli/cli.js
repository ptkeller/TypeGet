angular.module('typeget.cli', [])
 
  .controller('cliController', ['$scope', '$http', function($scope, $http){
  	$scope.method = 'GET';
    $scope.url = 'http://randomword.setgetgo.com/get.php';
    $scope.gameword = {word: null};
    $scope.givenword = {ranword: null};
    
    $scope.fetch = function() {
      $scope.code = null;
      $scope.response = null;

      $http({method: $scope.method, url: $scope.url}).
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
        $scope.fetch();
        $scope.gameword.word = null;
        console.log('ITS NOT BOKRED!!!!!!!!!!!!!1 360 NO SCOPE MLG STATUS')
      }else{
        console.log('its really borked')
      }   
      }     

}])