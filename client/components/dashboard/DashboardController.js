(function(){
  angular.module('VideoApp').controller('DashboardController',['$window','$rootScope','$scope','$state','$stateParams','$location','DashboardService','VideoService','$sce',function($window,$rootScope,$scope,$state,$stateParams,$location,DashboardService,VideoService,$sce){

    // $scope.videos = [];


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

    $scope.username = JSON.parse($window.sessionStorage['userInfo']).username;
    // $scope.sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;

        // gte the single video while making a http call
      $scope.loadMore = function(){
          VideoService.getVideos($stateParams.sessionId).success(function(data){
                $scope.videos = data;
                console.log(data);
            }).error(function(err){
                $scope.error = err;
            });
      };

      $scope.loadMore();

      $scope.rateFunction = function(rating,video) {
          console.log('rating',rating,'video',video);
          VideoService.rateViedo($stateParams.sessionId,video._id,rating)
              .success(function(data){
                  console.log(data);
              })
              .error(function () {
                  console.log(status);
              })
      };


      this.getSingleVideo = function(video_id){
          var vId = video_id.target.id;
          $state.go('/videoview',{videoId:video_id.target.id,sessionId:$stateParams.sessionId});
      };

        // get the Ratings of the video

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
