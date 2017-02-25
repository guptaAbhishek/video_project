(function(){
  angular.module('VideoApp').controller('LoginController',['$rootScope','$scope','$location','$state','$window','LoginService','AuthService','md5',function($rootScope,$scope,$location,$state,$window,LoginService,AuthService,md5){

    // login method
    $scope.login = function(username,password){

      if(username !== undefined && password !== undefined){

        password = md5.createHash(password || '');

        LoginService.logIn(username,password).then(function(data){

          if(data.sessionId){
            $state.go('/dashboard',{sessionId:data.sessionId});

          }else{

            alert('Username/Password combination is incorrect');

          }
        },function(error){
          $scope.loginError = error;
        });

      }else{

        alert('Please Enter the Username/password');

      }
    };

    // Logout method
    $scope.logout = function(){
      LoginService.logOut();
      $state.go('/');
    }

  }]);
})();
