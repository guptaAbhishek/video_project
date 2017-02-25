angular.module('VideoApp').service('VideoService',['$window','$http','$stateParams',function($window,$http,$stateParams){


    // var sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;

    return{
      getSingleVideo:function(sessionId,videoId){
          return $http({
              url:'/video',
              method:'GET',
              params:{
                  sessionId:sessionId,
                  videoId:videoId
              }
          });
      },

      getVideos:function(sessionId){
          return $http({
              url:'/videos',
              method:'GET',
              params:{
                  sessionId:sessionId
              }
          });
      },
      rateViedo:function (sessionId,videoId,rating) {
          return $http.post('/video/ratings?sessionId='+sessionId,{videoId:videoId,rating:rating});
      }


    };

}]);