angular.module('VideoApp').factory('DashboardService',['$rootScope','$http','$window','$routeParams',function($rootScope,$http,$window,$routeParams){

  console.log($routeParams.sessionId);
  return{
    getVideos:function(){

      return $http({
        url:'/videos',
        method:'GET',
        params:{
          sessionId:$routeParams.sessionId,
          skip:1,
          limit:5
        }
      });
    },
    getVideo:function(video_id){
      return $http({
        url:'/video',
        method:'GET',
        params:{
          sessionId:sessionId,
          videoId:video_id
        }
      });
    },
    getVideoRatings:function(){
      return $http({
        url:'/video/ratings',
        method:'POST',
        params:{
          sessionId:sessionId
        }
      });
    }

  };
}]);
