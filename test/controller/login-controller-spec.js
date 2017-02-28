describe('LoginController',function(){


    var $rootScope,
        $scope,
        dashboardController;


    beforeEach(function(){
        module('VideoApp');

        inject(function($rootScope,$controller){
            $scope = $rootScope.$new();
            dashboardController = $controller('LoginController',{
                $scope:$scope
            });
        })

    });

    describe('$scope.loadMore',function(){

        it("should be defined",function(){
            $scope.loadMore(function(){
                expect(this).toBeDefined();
            });
        });

        it("should init the $scope.videos testing $scope.loadMore()",function(){
            $scope.loadMore(function () {
                expect($scope.initialComplete).toBe(true);
            });
        });

    });

    describe('this.onUpdateState',function(){
        it("should be undefined outside the controller",function(){
            expect(dashboardController.onUpdateState()).not.toBeDefined();
        });
    });


    describe('this.onPlayerReady',function(){
        it("should be undefined outside the controller",function(){
            expect(dashboardController.onPlayerReady()).not.toBeDefined();
        });
    });

    describe('this.getSingleVideo',function(){
        it('should be undefined outside the controller',function(){
            expect(dashboardController.getSingleVideo()).not.toBeDefined();
        })
    });

    describe('$scope.getRatings',function(){
        it("should getratings for the video $scope.getRatings",function(){
            $scope.getRatings(function () {
                expect(this).toBeDefined();
                expect($scope.gotRatings).toBe(true);
            });
        });
    });

});