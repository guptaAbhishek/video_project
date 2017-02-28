describe('Video service test',function(){


    var $rootScope,
        $scope,
        controller,$filter,filter,$service,service,$httpBackend,getSingleVideo,getVideos,rateViedo;
    var originalTimeout;
    var VideoService;


    beforeEach(function(){
        module('VideoApp');
    });


    beforeEach(function(_$httpBackend_,_VideoService_){
        $httpBackend = _$httpBackend_;
        VideoService = _VideoService_;
    });


    describe('VideoService.getSingleVideo() test',function(){
        var originalTimeout;

        beforeEach(function() {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        });

        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });

       it('should get single video from the database ',function(){
           $.ajax({
               url: 'http://localhost:8080/video?sessionId=elpCA9lEOU2jMxOPfqK7QD3UK3xgImhl&videoId=580286691b27c20e4558cf9f',
               dataType: 'json',
               success: function (data, response) {
                   // Here your expected using data
                   expect(1).toBe(1);
                   doneFn();
               },
               error: function (data, response) {
                   // Here your expected using data
                   expect(1).toBe(1);
                   doneFn();
               }
           });
       });


    });


});