// describe('Video service test',function(){
//
//
//
//     var $httpBackend, $rootScope, createController, authRequestHandler;
//
//     // Set up the module
//     beforeEach(module('VideoApp'));
//
//
//     beforeEach(inject(function($injector) {
//
//
//
//         // // Set up the mock http service responses
//         // $httpBackend = $injector.get('$httpBackend');
//         // // backend definition common for all tests
//         // authRequestHandler = $httpBackend.when('GET', '/video')
//         //     .respond(200, { videoId: '580286691b27c20e4558cfa1', sessionId:'wLaM1sLHAk1pqeHcicfQdlHcaAbWlCDD'});
//         //
//         // // Get hold of a scope (i.e. the root scope)
//         // $rootScope = $injector.get('$rootScope');
//         // // The $controller service is used to create instances of controllers
//         // var $controller = $injector.get('$controller');
//         //
//         // createController = function() {
//         //     return $controller('VideoController', {'$scope' : $rootScope });
//         // };
//     }));
//
//     afterEach(function() {
//         $httpBackend.verifyNoOutstandingExpectation();
//         $httpBackend.verifyNoOutstandingRequest();
//     });
//
//     describe('VideoService.getVideos() :',function(){
//         it('should get all videos a token', function($http) {
//             /**
//              * Testing this code
//              *
//              * getSingleVideo:function(sessionId,videoId){
//                 return $http({
//                     url:'/video',
//                     method:'GET',
//                     params:{
//                         sessionId:sessionId,
//                         videoId:videoId
//                     }
//                 });
//             },
//              */
//             $httpBackend.expectGET('http://localhost:8080/videos',{sessionId:'GIHeJ1dGihugxhU5A9TV1Zhu5EKKvNcz'});
//             var controller = createController();
//             $httpBackend.flush();
//
//             expect(2+2).toBe(4);
//         });
//     });
//
//
//     it('should get one video', function($http) {
//
//         /**
//          * Testing this code
//          *
//          * getVideos:function(sessionId){
//                 return $http({
//                     url:'/videos',
//                     method:'GET',
//                     params:{
//                         sessionId:sessionId
//                     }
//                 });
//             },
//          */
//         // Notice how you can change the response even after it was set
//         $httpBackend.expectGET('http://localhost:8080/video',{sessionId:'GIHeJ1dGihugxhU5A9TV1Zhu5EKKvNcz',videoId:'580286691b27c20e4558cfa1'});
//         var controller = createController();
//         $httpBackend.flush();
//         expect(2+2).toBe(4);
//     });
//
//     it('should rate video', function($http) {
//
//         /**
//          * Testing this code
//          *
//          *
//          *
//          *  rateViedo:function (sessionId,videoId,rating) {
//                 return $http.post('/video/ratings?sessionId='+sessionId,{videoId:videoId,rating:rating});
//             }
//          *
//          */
//
//         var controller = createController();
//         $httpBackend.flush();
//
//         $httpBackend.expectPOST('http://localhost:8080/video/ratings', {sessionId:'GIHeJ1dGihugxhU5A9TV1Zhu5EKKvNcz',videoId:'580286691b27c20e4558cfa1',rating:'4'}).respond(201, '');
//         expect(2+2).toBe(4);
//         $httpBackend.flush();
//     });
//
//
// });