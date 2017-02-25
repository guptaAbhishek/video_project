angular.module('VideoApp').factory('DashboardService',['$rootScope','$http','$window','$routeParams','$stateParams',function($rootScope,$http,$window,$routeParams,$stateParams){

  console.log($stateParams.sessionId);
  return{
    getVideos:function(){

      return $http({
        url:'/videos',
        method:'GET',
        params:{
          sessionId:$stateParams.sessionId,
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
          sessionId:$stateParams.sessionId,
          videoId:video_id
        }
      });
    },
    getVideoRatings:function(){
      return $http({
        url:'/video/ratings',
        method:'POST',
        params:{
          sessionId:$stateParams.sessionId
        }
      });
    }

  };
}]);
