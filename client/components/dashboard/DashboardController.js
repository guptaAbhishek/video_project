console.log('in dashboard  controller');
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

}]);
