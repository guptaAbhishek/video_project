describe('Directive testing',function(){


    var $rootScope,
        $scope,
        controller,
        $filter,
        filter,
        $directive,
        directive,
        $compile,el,
        // $body=$('body'),
        simpleHtml='';





    beforeEach(function(){
        module('VideoApp');

        inject(function($injector){
            $directive = $injector.get('$directive');
            directive = $directive('starRating');
        });
    });



});