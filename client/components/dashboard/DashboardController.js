(function(){
  angular.module('VideoApp').controller('DashboardController',['$window','$rootScope','$scope','$location','DashboardService',function($window,$rootScope,$scope,$location,DashboardService){

    $scope.videos = [];
    $scope.username = JSON.parse($window.sessionStorage['userInfo']).username;

      DashboardService.getVideos()
        .success(function(data){
          $scope.videos = data;
        })
        .error(function(){
          console.log(status);
        });

        $scope.getVideo = function(video_id){
          var vId = video_id.target.id;
          $rootScope.videoId = vId;
          $location.path('/video');
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
