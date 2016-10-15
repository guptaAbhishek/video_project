    angular.module('VideoApp').controller('VideoController',['$window','$rootScope','$scope','VideoService',function($window,$rootScope,$scope,VideoService){
      var vid = $rootScope.videoId;
        var sessionId = JSON.parse($window.sessionStorage['userInfo']).sessionId;
        var username = JSON.parse($window.sessionStorage['userInfo']).username;

      $scope.rating = 5;

      $scope.rateFunction = function(rating) {
        VideoService.rateViedo(sessionId,vid,rating)
            .success(function(data){
              console.log(data);
            })
            .error(function () {
              console.log(status);
            })
      };

      $scope.getSingleVideo = function () {
        VideoService.getSingleVideo(sessionId,vid)
            .success(function(data){
              $scope.video = data.data;
            })
            .error(function(){
              console.log(status);
            })
      }

      $scope.getRatingsOfVideo = function(){

      }

  }]).directive('starRating',
        function() {
          return {
            restrict : 'A',
            template : '<ul class="rating">'
            + '	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
            + '\u2605'
            + '</li>'
            + '</ul>',
            scope : {
              ratingValue : '=',
              max : '=',
              onRatingSelected : '&'
            },
            link : function(scope, elem, attrs) {
              var updateStars = function() {
                scope.stars = [];
                for ( var i = 0; i < scope.max; i++) {
                  scope.stars.push({
                    filled : i < scope.ratingValue
                  });
                }
              };

              scope.toggle = function(index) {
                scope.ratingValue = index + 1;
                scope.onRatingSelected({
                  rating : index + 1
                });
              };

              scope.$watch('ratingValue',
                  function(oldVal, newVal) {
                    if (newVal) {
                      updateStars();
                    }
                  }
              );
            }
          };
        }
    );

