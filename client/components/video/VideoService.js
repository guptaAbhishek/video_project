angular.module('VideoApp').service('VideoService',['$http',function($http){

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

      rateViedo:function (sessionId,videoId,rating) {
          return $http.post('/video/ratings?sessionId='+sessionId,{videoId:videoId,rating:rating});
      }
    };

}]);