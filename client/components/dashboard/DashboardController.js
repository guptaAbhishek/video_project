(function(){
  angular.module('VideoApp').controller('DashboardController',['$scope','DashboardService',function($scope,DashboardService){

    $scope.videos = [];

      DashboardService.getVideos()
        .success(function(data){
          console.log(data);
          $scope.videos = data;
        })
        .error(function(){
          console.log(status);
        });

        $scope.getVideo = function(video_id){
          DashboardService.getVideo()
            .success(function(data){
              $scope.video = data;
            })
            .error(function(){
              console.log(status);
            })
        }

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
