angular.module('VideoApp').factory('LoginService',['$http','$window','$q','$location',function($http,$window,$q,$location){

  var userInfo;

  function init() {
    if ($window.sessionStorage["userInfo"]) {
      userInfo = JSON.parse($window.sessionStorage["userInfo"]);
    }
  }

  init();


  return{
    getUserInfo:function(){
      return userInfo;
    },
    logIn: function(username,password){
      var sessionId;
      var username;
      var deferred = $q.defer();
      $http.post('/user/auth', {
        username: username,
        password: password
      }).then(function (result) {
        userInfo = {
          sessionId:result.data.sessionId,
          username:result.data.username
        };
        $window.sessionStorage['userInfo'] = JSON.stringify(userInfo);
        deferred.resolve(userInfo);
      },function(error){
        console.log('loginService error',error);
        deferred.reject(error);
      });
      return deferred.promise;
    },
    logOut:function(){
      var sessionId;
      var deferred = $q.defer();
      $http({
        url:'/user/logout',
        method:'GET',
        params:{
          sessionId:userInfo.sessionId
        }
      }).then(function(result){
        $window.sessionStorage["userInfo"] = null;
        userInfo = null;

        deferred.resolve(result);
      },function(error){
        deferred.reject(error);
      });
      return deferred.promise;
    }
  };
}]);
