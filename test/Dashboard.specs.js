// describe('DashboardController',function(){
//     beforeEach(module('VideoApp'));
//
//     var $controller,$filter;
//
//     beforeEach(inject(function (_$controller_,_$filter_) {
//
//         // The injector unwraps the underscores (_) from around the parameter names when matching
//         $controller = _$controller_;
//
//         $filter = _$filter_;
//
//         describe('webm filter test',function(){
//             it('should convert the .mp4 type file to .webm type',function(){
//                 var filter = $filter('webm');
//                 var input = '/client/node_js_app.mp4';
//                 expect(webm(input)).toBe('/client/node_js_app.mp4');
//             });
//         });
//
//
//
//
//         // describe('$scope.videos',function(){
//         //     it('$scope.videos should not be null',function(){
//         //         var $scope = {};
//         //
//         //         var controller = $controller('DashboardController',{$scope:$scope});
//         //
//         //         $scope.loadMore();
//         //
//         //         expect($scope.videos).toBe
//         //
//         //     })
//         // })
//
//     }));
//
//
// })

describe('sum ',function(){
    expect(2+2).toBe(4);
})