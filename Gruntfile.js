module.exports = function(grunt){



    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // configure jshint to validate js files --------

        jshint:{
            options:{
                reporter:require('jshint-stylish') // to make error o/p look good
            },

            build:['Gruntfile.js','client/**/*.js']
        },

        // minifying js file

        uglify:{
            options:{
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build:{
                files:{
                    'client/dist/js/magic.min.js':'client/**/*.js'
                }
            }
        },

        // minifying css file

        cssmin:{
            options:{
                banner:'/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build:{
                files:{
                    'client/dist/css/style.min.css':'client/**/*.css'
                }
            }
        },


        // create tasks


    });



    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);



}