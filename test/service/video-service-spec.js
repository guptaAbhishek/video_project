describe('Video service test',function(){

    beforeEach(module('VideoApp'));

    var videoService;

    beforeEach(function(){
        module(function($provider){
            $provider.value('VideoService',videoService);
        });
    });


    describe('getSingleVideo() ',function(){

        it('should be defined',function(){
            expect(videoService.getSingleVideo()).toBeDefined();
        });

        it('should accept two arguments ',function(){

        });

        it('should return single video',function(){

        });
    });


    describe('getVideos()',function(){

        it('should be defined',function(){

        });

        it('should accept one argument',function(){

        });

        it('should get all the videos',function(){

        });
    });

    describe('rateVideo()',function(){

        it('should be defined',function(){

        });

        it('should accept three argument',function(){

        });

        it('should rate the video',function(){

        });
    });


});