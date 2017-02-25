(function(){
    'use strict';
    angular.module('VideoApp').filter('webm',['$log',function($log){
        return function (input) {
            return input ? input.split('.mp4')[0]+'.webm' : input;
        }
    }]);
})();