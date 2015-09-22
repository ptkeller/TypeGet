angular.module('typeget.cli', [])
 
  .controller('cliController', ['$scope', '$http', function($scope, $http){
  	$scope.method = 'GET';
    $scope.url = 'http://randomword.setgetgo.com/get.php';

    $scope.fetch = function() {
      $scope.code = null;
      $scope.response = null;

      $http({method: $scope.method, url: $scope.url}).
        then(function(response) {
          $scope.status = response.status;
          $scope.data = response.data;
          console.log(response.data)
        }, function(response) {
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
      });
    };

}])