(function(){
  angular.module('VideoApp').controller('DashboardController',['$window','$rootScope','$scope','$state','$stateParams','$location','DashboardService','VideoService','$sce',function($window,$rootScope,$scope,$state,$stateParams,$location,DashboardService,VideoService,$sce){

      $scope.initialComplete = false;
      $scope.rated = false;
      $scope.gotRatings = false;
      this.config = {
          preload: "none",
          sources: [
              {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
              {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
              {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
          ],
          tracks: [
              {
                  src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                  kind: "subtitles",
                  srclang: "en",
                  label: "English",
                  default: ""
              }
          ],
          theme: {
              url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
          }
      };


      this.players = [];

      this.onPlayerReady = function (API, index) {
          this.players[index] = API;
      };

      this.onUpdateState = function (state, index) {
          if (state === 'play') {
              // pause other players
              for (var i=0, l=this.players.length; i<l; i++) {
                  if (i !== index) {
                      this.players[i].pause();
                  }
              }
          }
      };

    // $scope.username = JSON.parse($window.sessionStorage['userInfo']).username;
    // $scope.sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;

        // gte the single video while making a http call
      $scope.loadMore = function(){
          VideoService.getVideos($stateParams.sessionId).success(function(data){
                $scope.initialComplete = true;
                $scope.videos = data;
                console.log(data);
            }).error(function(err){
                $scope.error = err;
            });
      };

      $scope.loadMore();

      $scope.rateFunction = function(rating,video) {
          if(video !== undefined && rating !== undefined){
              VideoService.rateViedo($stateParams.sessionId,video._id,rating)
                  .success(function(data){
                      $scope.rated = true;
                      console.log(data);
                  })
                  .error(function () {
                      console.log(status);
                  });

          }else{
              throw new Error('rating/video not defined');
          }

      };


      this.getSingleVideo = function(video_id){
          var vId = video_id.currentTarget.attributes[0].nodeValue;
          console.log('vid = > ',vId);
          $state.go('/videoview',{videoId:vId,sessionId:$stateParams.sessionId});
          $scope.states = '/videoview';
      };

        // get the Ratings of the video

        $scope.getRatings = function(video_id,ratings){
          DashboardService.getVideoRatings()
            .success(function(data){
              $scope.gotRatings = true;
              $scope.ratings = data;
            })
            .error(function(){
              console.log(status);
            });
        }


  }]);
})();
