    angular.module('VideoApp').controller('VideoController',['$window','$rootScope','$scope','VideoService','$stateParams','$state',function($window,$rootScope,$scope,VideoService,$stateParams,$state){
        var vid = $rootScope.videoId;
        // var sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;
        // var username = JSON.parse($window.sessionStorage['userInfo']).username;

      $scope.rating = 5;

      console.log('in video controller');


      $scope.getSingle = function () {
          console.log('calling getSingle');
        VideoService.getSingleVideo($stateParams.sessionId,$stateParams.videoId)
            .success(function(data){
                console.log(data);
              $scope.single_video = data.data;
              console.log($scope.single_video);
                $state.go('/videoview',{videoId:$stateParams.videoId,sessionId:$stateParams.sessionId});
            })
            .error(function(err){
                $scope.error = err;
                console.log(status);
            })
      };

      $scope.getSingle();


  }]);

