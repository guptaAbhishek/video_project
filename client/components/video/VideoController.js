    angular.module('VideoApp').controller('VideoController',['$window','$rootScope','$scope','VideoService',function($window,$rootScope,$scope,VideoService){
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
              $scope.video = data.data;
            })
            .error(function(){
              console.log(status);
            })
      }

      $scope.getRatingsOfVideo = function(){

      }

  }]);

