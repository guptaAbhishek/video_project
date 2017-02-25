(function(){
  angular.module('VideoApp').controller('DashboardController',['$window','$rootScope','$scope','$state','$stateParams','$location','DashboardService','VideoService',function($window,$rootScope,$scope,$state,$stateParams,$location,DashboardService,VideoService){

    $scope.videos = [];

    $scope.username = JSON.parse($window.sessionStorage['userInfo']).username;
    $scope.sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;

        // gte the single video while making a http call
    console.log('in dashbaoard controller');
      $scope.loadMore = function(){
        console.log('loadmore');
          VideoService.getVideos($stateParams.sessionId).success(function(data){
            $scope.videos = data;
            console.log(data);
        }).error(function(err){
            $scope.error = err;
        });

      };


      $scope.loadMore();


      this.getSingleVideo = function(video_id){
          var vId = video_id.target.id;
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
