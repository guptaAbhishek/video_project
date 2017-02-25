(function(){

    'use strict';

    angular.module('VideoApp').filter('webm',['$log',function($log){

        return function (input) {
            if(input !== 'undefined' || input !== null){
                var str = input.split('.mp4');

                if(str === 'undefined' || str === null){
                    str = input+'.webm';
                }else{
                    str = str[0]+'.webm';
                }
                return str;

            }else {
                throw new Error('VideoTypeFilter.js : input null or undefined ')
            }
        }
    }]);


})();