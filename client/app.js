(function(){
  'use strict';
  var app = angular.module('VideoApp',['ngRoute','ui.router']);
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $routeProvider
        .when('/login',{
          templateUrl:'/client/login.html'
        })
        .when('/dashboard',{
          templateUrl:'/client/dashboard.html'
        })
        .when('/video',{
          templateUrl:'/client/single.html'
        })
        .otherwise({
          redirectTo:'/login'
        })

    }])

    app.run(['$rootScope','$state','$stateParams',
      function($rootScope,$state,$stateParams){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ])

})();
