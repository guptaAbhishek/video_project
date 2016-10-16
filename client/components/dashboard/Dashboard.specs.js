var $rootScope,
    $scope,
    controller;

beforeEach(function(){

    module('VideoApp');

    inject(function($injector){
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        controller = $injector.get('$controller')('DashboardController',{$scope:$scope});
    });
});

describe('Initialization Dashboard Controller',function(){
    it('should set the value of $scope.username',function(){
        expect($scope.username).toBeDefined();
    })

})



