var typeget = angular.module('typeget', [
  'typeget.cli',
  'ngRoute',
  'typeget.logic'
])
    .config(function($routeProvider, $locationProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'app/cli/cli.html',
          controller: 'cliController'
        })
        .otherwise({
          redirectTo: '/'
      });
  });