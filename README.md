# Crossover Video Portal backend
This is the backend API code that needs to be consumed by front-end applications.

# npm install
To install all the node modules required for the VideoApp

# npm start
        To start the VieoApp and open http://localhost:8080/login
        Login with username and password 
        
        dummy user credentials : username : ali; password : password
                                

# Grunt : grunt watch & grunt build

        Type grunt on the terminal => $grunt
        Its a task runner
         
        grunt watch => grunt will look at all the files configured in Gruntfile.js for changes
                        if any changes occur it starts the task runnner 
        
        grunt build => to build the project using grunt task runner.
                       grunt.registerTask('build', ['ngAnnotate','concat','uglify', 'cssmin']);
                       it will first annotate the angularjs files 
                       then it will concat 
                       after annotation and concatation it will minify the all the js file 
                       using uglify library 
                       cssmin : minify the all the css present in the /client/assets/css
                       
        jshint 
               it will check all the javascript errors


        uglify : it will minify the all the js file for the production and will
         
               store it in the client/dist/js/magic.min.js 
         
         and alos it will minity the 
        
        cssmin

# Karma Jasmin 
        For testing the Functions(controllers / services / filters / directives )
        
        karama start to see the results of suits 
         
        