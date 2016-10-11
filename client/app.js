(function(){
  'use strict';

  var app = angular.module('VideoApp',['ui.router'])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise('/');


      $stateProvider
        .state("search",{
          controller:'',
          url:'',
          templateUrl:''
        })
    }])

    app.run(['$rootScope','$state','$stateParams',
      function($rootScope,$state,$stateParams){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ])

})();
