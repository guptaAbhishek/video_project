angular.module('VideoApp').factory('DashboardService',['$http','$window',function($http,$window){
  var sessionId = $window.sessionStorage.sessionId;
  console.log(sessionId);
  return{
    getVideos:function(){
      return $http({
        url:'/videos',
        method:'GET',
        params:{
          sessionId:sessionId,
          skip:1,
          limit:5
        }
      });
    }
  };
}]);
