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
            $location.path('/dashboard').search({sessionId:data.sessionId});
          }else{
            console.log('something is wrong')
          }
        });
      }else{
        alert('Please Enter the Username/password');
      }
    }

    // Logout method
    $scope.logout = function(){
      LoginService.logOut();
      $location.path('/login').search('key',null);
    }

  }]);
})();
