var typeget = angular.module('typeget', [
  'typeget.cli',
  'ngRoute',
  'typeget.timer',
  'typeget.score'
])
    .config(function($routeProvider, $locationProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'app/cli/cli.html',
          controller: 'cliController'
        })
        .when('/gameover', {
          templateUrl: 'app/timer/timer.html',
          controller: 'timeCon'
        })
        .when('/scorescreen', {
          templateUrl: 'app/score/screen.html',
          controller: 'scoreCon'
        })
        .otherwise({
          redirectTo: '/'
      });
  })
typeget.value('playerScore', 0);