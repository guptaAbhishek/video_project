(function(){
  'use strict';
  var app = angular.module('VideoApp',['ui.router','angular-md5','angular-loading-bar','ngSanitize','com.2fdevs.videogular','infinite-scroll']);
    app.config(['$locationProvider','$stateProvider','$urlRouterProvider','cfpLoadingBarProvider',function($locationProvider,$stateProvider,$urlRouterProvider,cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeSpinner = false;

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

        $stateProvider
        .state('/',{
          url:'/login',
          templateUrl:'/components/login/LoginView.html'
        })
        .state('/dashboard',{
          url:'/dashboard?sessionId',
          templateUrl:'/components/dashboard/DashboardView.html',
            controller:'DashboardController as dashboardCtrl',
          resolve:{loginRequired:loginRequired}
        })
        .state('/videoview',{
          url:'/videoview?videoId?sessionId',
            controller:'VideoController',
            views:{
              'video':{
                  templateUrl:'/components/video/VideoView.html',
                  resolve:{loginRequired:loginRequired}
              }
            }
        });

        $urlRouterProvider.otherwise('/login');

    }]);



    app.run(['$rootScope','$location','$window',
      function($rootScope,$location){
        $rootScope.$on("$routeChangeSuccess",function(userInfo){
          // console.log(userInfo);
        });

        $rootScope.$on("$routeChangeError",function(event,curr,pre,eventObj){
          if(eventObj.authenticated === false){
            $location.path('/login');
          }
        })
      }
    ])

})();
