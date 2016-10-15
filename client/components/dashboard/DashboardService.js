angular.module('VideoApp').factory('DashboardService',['$rootScope','$http','$window',function($rootScope,$http,$window){
  var sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;
  console.log('dashboard',sessionId);
  var username = JSON.parse($window.sessionStorage['userInfo']).username;
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
