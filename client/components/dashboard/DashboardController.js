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
