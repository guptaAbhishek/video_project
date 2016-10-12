(function(){
  'use strict';
  var app = angular.module('VideoApp',['ngRoute','ui.router','angular-md5']);
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $routeProvider
        .when('/login',{
          templateUrl:'/components/login/LoginView.html'
        })
        .when('/dashboard',{
          templateUrl:'/components/dashboard/DashboardView.html'
        })
        .when('/video',{
          templateUrl:'/components/video/VideoView.html'
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
