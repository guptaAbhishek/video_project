(function(){
  'use strict';
  angular.module('VideoApp').controller('LoginController',['$scope','$location','$window','LoginService','AuthService','md5',function($scope,$location,$window,LoginService,AuthService,md5){

    // login method
    $scope.login = function(username,password){
      console.log('workign');
      if(username !== undefined && password !== undefined){
        password = md5.createHash(password || '');
        console.log(password);
        LoginService.logIn(username,
          password).success(function(data){
            AuthService.isLogged = true;
            $window.sessionStorage.sessionId = data.sessionId;
            $location.path('/dashboard');
        }).error(function(data){
            console.log(status);
            console.log(data);
        });
      }else{
        alert('Please Enter the Username/password');
      }
    }

    // Logout method
    $scope.logout = function(){
      LoginService.logOut();
      AuthService.isLogged = false;
      $location.path('/login');
      delete $window.sessionStorage.sessionId;
      // if(AuthService.isLogged){
      //
      //   LoginService.logOut();
      //
      //
      // }
    }

  }]);
})();
