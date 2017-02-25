module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: [
                    'client/assets/css/*.css',
                    'client/components/**/*.js',
                    'client/*.js'
                    ],
                tasks: ['build'],
                options: {
                    spawn:false,
                    event:['all']
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    'client/min-safe/app.js': ['client/app.js'],
                    'client/min-safe/js/components.js':[ 'client/components/**/*.js']

                }
            }
        },
        concat: {
            js: { //target
                src: ['client/min-safe/app.js','client/min-safe/js/components.js'],
                dest: 'client/min/app.js'
            }
        },
        uglify:{
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'client/dist/js/magic.min.js': ['client/min/app.js']
                }
            }
        },
        jshint:{
            options:{
                reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
            },
            build: [
                'client/assets/css/*.css',
                'client/components/**/*.js',
                'client/*.js'
            ]

        },
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'client/dist/css/style.min.css': ['client/assets/css/*.css']
                }
            }
        }




    });


    grunt.loadNpmTasks('grunt-stripcomments');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['ngAnnotate','concat','uglify', 'cssmin']);

};