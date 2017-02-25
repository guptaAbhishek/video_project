describe('DashboardController',function(){


    var $rootScope,
        $scope,
        controller;


    beforeEach(function(){
        module('VideoApp');

        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('DashboardController',{$scope:$scope})
        })

    });



    describe("Initialization",function(){
        it("should init the $scope.videos",function(){
            expect($scope.videos).toBeUndefined();
        })
    });

});