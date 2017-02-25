(function(){
  'use strict';
  var app = angular.module('VideoApp',['ngRoute','ui.router','angular-md5','angular-loading-bar']);
    app.config(['$routeProvider','$locationProvider','$stateProvider','$urlRouterProvider','cfpLoadingBarProvider',function($routeProvider,$locationProvider,$stateProvider,$urlRouterProvider,cfpLoadingBarProvider){
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
            controller:'DashboardController',
          resolve:{loginRequired:loginRequired}
        })
        .state('/video',{
          url:'/video?videoId?sessionId',
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
          console.log(userInfo);
        });

        $rootScope.$on("$routeChangeError",function(event,curr,pre,eventObj){
          if(eventObj.authenticated === false){
            $location.path('/login');
          }
        })
      }
    ])

})();

(function(){
  angular.module('VideoApp').controller('DashboardController',['$window','$rootScope','$scope','$state','$stateParams','$location','DashboardService',function($window,$rootScope,$scope,$state,$stateParams,$location,DashboardService){

    $scope.videos = [];

    $scope.username = JSON.parse($window.sessionStorage['userInfo']).username;
    $scope.sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;

    DashboardService.getVideos()
        .success(function(data){
            console.log(data);
          $scope.videos = data;
      })
      .error(function(){
          console.log(status);
      });

        // gte the single video while making a http call

        $scope.getVideo = function(video_id){
          console.log(video_id);
          var vId = video_id.target.id;
          console.log('vid',vId);
          $rootScope.videoId = vId;
          $state.go('/video',{videoId:vId,sessionId:$stateParams.sessionId});
        };

        // get the Ratings of the video

        $scope.getRatings = function(video_id,ratings){
          DashboardService.getVideoRatings()
            .success(function(data){
              $scope.ratings = data;
            })
            .error(function(){
              console.log(status);
            });
        }

  }]);
})();

angular.module('VideoApp').factory('DashboardService',['$rootScope','$http','$window','$routeParams','$stateParams',function($rootScope,$http,$window,$routeParams,$stateParams){

  console.log($stateParams.sessionId);
  return{
    getVideos:function(){

      return $http({
        url:'/videos',
        method:'GET',
        params:{
          sessionId:$stateParams.sessionId,
          skip:1,
          limit:5
        }
      });
    },
    getVideo:function(video_id){
      return $http({
        url:'/video',
        method:'GET',
        params:{
          sessionId:$stateParams.sessionId,
          videoId:video_id
        }
      });
    },
    getVideoRatings:function(){
      return $http({
        url:'/video/ratings',
        method:'POST',
        params:{
          sessionId:$stateParams.sessionId
        }
      });
    }

  };
}]);

(function(){

    'use strict';

    angular.module('VideoApp').filter('webm',['$log',function($log){

        return function (input) {
            if(input !== 'undefined' || input !== null){
                var str = input.split('.mp4');
                return str[0]+'.webm';

            }else {
                throw new Error('VideoTypeFilter.js : input null or undefined ')
            }
        }
    }]);


})();
angular.module('VideoApp').factory('AuthService',function(){
  var auth = {
    isLogged: false
  }

  return auth;
});

(function(){
  angular.module('VideoApp').controller('LoginController',['$rootScope','$scope','$location','$state','$window','LoginService','AuthService','md5',function($rootScope,$scope,$location,$state,$window,LoginService,AuthService,md5){

    // login method
    $scope.login = function(username,password){

      if(username !== undefined && password !== undefined){

        password = md5.createHash(password || '');

        LoginService.logIn(username,password).then(function(data){

          if(data.sessionId){
            $state.go('/dashboard',{sessionId:data.sessionId});

          }else{

            alert('Username/Password combination is incorrect');

          }
        },function(error){
          $scope.loginError = error;
        });

      }else{

        alert('Please Enter the Username/password');

      }
    };

    // Logout method
    $scope.logout = function(){
      LoginService.logOut();
      $state.go('/');
    }

  }]);
})();

angular.module('VideoApp').factory('LoginService',['$http','$window','$q','$location',function($http,$window,$q,$location){

  var userInfo;

  function init() {
    if ($window.sessionStorage["userInfo"]) {
      userInfo = JSON.parse($window.sessionStorage["userInfo"]);
    }
  }

  init();


  return{
    getUserInfo:function(){
      return userInfo;
    },
    logIn: function(username,password){
      var sessionId;
      var username;
      var deferred = $q.defer();
      $http.post('/user/auth', {
        username: username,
        password: password
      }).then(function (result) {
        userInfo = {
          sessionId:result.data.sessionId,
          username:result.data.username
        };
        $window.sessionStorage['userInfo'] = JSON.stringify(userInfo);
        deferred.resolve(userInfo);
      },function(error){
        console.log('loginService error',error);
        deferred.reject(error);
      });
      return deferred.promise;
    },
    logOut:function(){
      var sessionId;
      var deferred = $q.defer();
      $http({
        url:'/user/logout',
        method:'GET',
        params:{
          sessionId:userInfo.sessionId
        }
      }).then(function(result){
        $window.sessionStorage["userInfo"] = null;
        userInfo = null;

        deferred.resolve(result);
      },function(error){
        deferred.reject(error);
      });
      return deferred.promise;
    }
  };
}]);

angular.module('VideoApp').directive('starRating',
    function() {
        return {
            restrict : 'A',
            template : '<ul class="rating">'
            + '	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
            + '\u2605'
            + '</li>'
            + '</ul>',
            scope : {
                ratingValue : '=',
                max : '=',
                onRatingSelected : '&'
            },
            link : function(scope, elem, attrs) {
                var updateStars = function() {
                    scope.stars = [];
                    for ( var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled : i < scope.ratingValue
                        });
                    }
                };

                scope.toggle = function(index) {
                    scope.ratingValue = index + 1;
                    scope.onRatingSelected({
                        rating : index + 1
                    });
                };

                scope.$watch('ratingValue',
                    function(oldVal, newVal) {
                        if (newVal) {
                            updateStars();
                        }
                    }
                );
            }
        };
    }
);
    angular.module('VideoApp').controller('VideoController',['$window','$rootScope','$scope','VideoService','$routeParams',function($window,$rootScope,$scope,VideoService,$routeParams){
        var vid = $rootScope.videoId;
        var sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;
        var username = JSON.parse($window.sessionStorage['userInfo']).username;

      $scope.rating = 5;

      $scope.rateFunction = function(rating) {
        VideoService.rateViedo(sessionId,vid,rating)
            .success(function(data){
              console.log(data);
            })
            .error(function () {
              console.log(status);
            })
      };

      $scope.getSingleVideo = function () {
        VideoService.getSingleVideo(sessionId,vid)
            .success(function(data){
                console.log('single video',data);
              $scope.video = data.data;
              console.log('nesdfsdf',$scope.video);
            })
            .error(function(){
              console.log(status);
            })
      };

      $scope.getVideos = function(){
        VideoService.getVideos(sessionId)
            .success(function(res){
                console.log(res);
                $scope.videos = res;
            })
            .error(function(error){
               $scope.error = error;
            });
      };

      $scope.getRatingsOfVideo = function(){

      }

  }]);


angular.module('VideoApp').service('VideoService',['$window','$http',function($window,$http){
    var sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;

    return{
      getSingleVideo:function(sessionId,videoId){
          return $http({
              url:'/video',
              method:'GET',
              params:{
                  sessionId:sessionId,
                  videoId:videoId
              }
          });
      },

      getVideos:function(sessionId){
          return $http({
              url:'/videos',
              method:'GET',
              params:{
                  sessionId:sessionId
              }
          });
      },
      rateViedo:function (sessionId,videoId,rating) {
          return $http.post('/video/ratings?sessionId='+sessionId,{videoId:videoId,rating:rating});
      }


    };

}]);