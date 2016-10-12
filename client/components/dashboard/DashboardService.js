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
    },
    getVideo:function(video_id){
      alert(video_id);
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
