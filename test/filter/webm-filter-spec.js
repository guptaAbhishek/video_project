describe('filter',function(){


    var $rootScope,
        $scope,
        controller,$filter,filter;



    beforeEach(function(){
        module('VideoApp');

        inject(function($injector){
            $filter = $injector.get('$filter');
            filter = $filter('webm');
        });
    });

    describe('webm filter',function () {

        it('should return .webm filter format',function(){
            expect(filter('/client/nodejs_tutorial.mp4')).toBe('/client/nodejs_tutorial.webm');
        });

        it('should return undefined when passed undefined',function(){
           expect(filter(undefined)).toBeUndefined();
        });

        it('should return null when passed null',function(){
            expect(filter(null)).toBeNull();
        });

        it('should be blank string when a black string is passed in',function(){
            expect(filter("")).toEqual("");
        });

        it('should also change the .webm file type to .webm file type',function(){
            // expect(filter('/client/nodejs_tutorial.webm')).toBe('/client/nodejs_tutorial.webm');
        })
    });


});