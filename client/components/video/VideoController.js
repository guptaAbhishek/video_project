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

