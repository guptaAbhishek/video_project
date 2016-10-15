(function(){
  'use strict';
  var app = angular.module('VideoApp',['ngRoute','ui.router','angular-md5']);
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      var userInfo;

      var loginRequired = ['$q','LoginService',function($q,LoginService) {
           userInfo = LoginService.getUserInfo();
          if(userInfo){
            return $q.when(userInfo);
          }else{
            return $q.reject({authenticated:false});
          }

      }];

      $routeProvider
        .when('/login',{
          templateUrl:'/components/login/LoginView.html'
        })
        .when('/dashboard',{
          templateUrl:'/components/dashboard/DashboardView.html',
          resolve:{loginRequired:loginRequired}
        })
        .when('/video',{
          templateUrl:'/components/video/VideoView.html',
          resolve:{loginRequired:loginRequired}
        })
        .otherwise({
          redirectTo:'/login'
        })

    }])

    app.run(['$rootScope','$location','$window',
      function($rootScope,$location){
        $rootScope.$on("$routeChangeSuccess",function(userInfo){
          console.log(userInfo);
          // $location.path('/dashboard');
        });



        $rootScope.$on("$routeChangeError",function(event,curr,pre,eventObj){
          if(eventObj.authenticated === false){
            $location.path('/login');
          }
        })
      }
    ])

})();
