(function(){

    'use strict';

    angular.module('VideoApp').filter('webm',['$log',function($log){

        return function (input) {
            if(input !== 'undefined' || input !== null){
                var str = input.split('.mp4');
                return str[0]+'.webm';

            }else {
                throw new Error('VideoTypeFilter.js : input null or undefined ')
            }
        }
    }]);


})();