(function(){
  angular.module('VideoApp').controller('DashboardController',['$window','$rootScope','$scope','$state','$stateParams','$location','DashboardService','VideoService',function($window,$rootScope,$scope,$state,$stateParams,$location,DashboardService,VideoService){

    // $scope.videos = [];


    // $scope.username = JSON.parse($window.sessionStorage['userInfo']).username;
    // $scope.sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;

        // gte the single video while making a http call
      $scope.loadMore = function(){
          VideoService.getVideos($stateParams.sessionId).success(function(data){
                $scope.videos = data;
                console.log(data);
            }).error(function(err){
                $scope.error = err;
            });
      };

      $scope.loadMore();

      $scope.rateFunction = function(rating,video) {
          console.log('rating',rating,'video',video);
          VideoService.rateViedo($stateParams.sessionId,video._id,rating)
              .success(function(data){
                  console.log(data);
              })
              .error(function () {
                  console.log(status);
              })
      };


      this.getSingleVideo = function(video_id){
          var vId = video_id.target.id;
          $state.go('/videoview',{videoId:video_id.target.id,sessionId:$stateParams.sessionId});
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
