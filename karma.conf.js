// Karma configuration
// Generated on Thu Oct 13 2016 03:33:15 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    basePath: '',


    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'client/assets/js/angular/angular-md5.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.9.0/loading-bar.min.js',
        'client/dist/js/magic.min.js',
        'client/app.js',
        'client/min/app.js',
        'client/components/**/*.js',
        'test/controller/*.js',
        'test/filter/*.js',
        'test/directive/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    preprocessors: {
        'client/components/**/*.html':['ng-html2js']
    },

    ngHtml2JsPreprocessor:{
        moduleName:'templates'
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
