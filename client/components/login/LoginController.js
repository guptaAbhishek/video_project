(function(){
  'use strict';
  angular.module('VideoApp').controller('LoginController',['$rootScope','$scope','$location','$window','LoginService','AuthService','md5',function($rootScope,$scope,$location,$window,LoginService,AuthService,md5){

    // login method
    $scope.login = function(username,password){
      if(username !== undefined && password !== undefined){
        console.log('login controller button clicked');
        password = md5.createHash(password || '');
        LoginService.logIn(username,password).then(function(data){
          if(data.sessionId){
            console.log('logging');
            $location.path('/dashboard')
          }
        });
      }else{
        alert('Please Enter the Username/password');
      }
    }

    // Logout method
    $scope.logout = function(){
      LoginService.logOut();
      $location.path('/login')
    }

  }]);
})();
