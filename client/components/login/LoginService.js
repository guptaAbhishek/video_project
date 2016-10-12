angular.module('VideoApp').factory('LoginService',['$http','$window',function($http,$window){
  var sessionId = $window.sessionStorage.sessionId;
  return{
    logIn: function(username,password){
      return $http.post('/user/auth', {username: username, password: password});
    },
    logOut:function(){
      return $http({
        url:'/user/logout',
        method:'GET',
        params:{
          sessionId:sessionId
        }
      });
    }
  };
}]);
