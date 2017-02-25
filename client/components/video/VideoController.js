    angular.module('VideoApp').controller('VideoController',['$window','$rootScope','$scope','VideoService','$routeParams','$stateParams','$state',function($window,$rootScope,$scope,VideoService,$routeParams,$stateParams,$state){
        var vid = $rootScope.videoId;
        var sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;
        var username = JSON.parse($window.sessionStorage['userInfo']).username;

      $scope.rating = 5;

      console.log('in video controller');

      $scope.rateFunction = function(rating) {
        VideoService.rateViedo(sessionId,vid,rating)
            .success(function(data){

            })
            .error(function () {
              console.log(status);
            })
      };

      $scope.getSingle = function () {
        VideoService.getSingleVideo($stateParams.sessionId,$stateParams.videoId)
            .success(function(data){
              $scope.single_video = data.data;
              console.log($scope.single_video);
                $state.go('/video',{videoId:vId,sessionId:$stateParams.sessionId});
            })
            .error(function(err){
                $scope.error = err;
                console.log(status);
            })
      };

        $scope.getSingle();


  }]);

