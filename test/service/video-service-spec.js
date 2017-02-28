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


    describe('VideoService',function(){


        it('VideoService.getSingleVideo() : should get single video from the database ',function(){
            $httpBackend
                .expect('GET', 'http://localhost:8080/videoview')
                .respond(200, { videoId: '580286691b27c20e4558cfa1', sessionId:'wLaM1sLHAk1pqeHcicfQdlHcaAbWlCDD'});
            $httpBackend.flush();
        });

        it('VideoService.getVideos() : should get single video from the database ',function(){

        });


        it('VideoService.rateViedo() : should get single video from the database ',function(){

        });


    });


});