// Load Grunt
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Tasks
        sass: { // Begin Sass Plugin
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'app/assets/styles/sass',
                    src: ['**/*.scss'],
                    dest: 'app/assets/styles/css',
                    ext: '.css'
                }]
            }
        },
        postcss: { // Begin Post CSS Plugin
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'app/assets/styles/css/style.css'
            }
        },
        cssmin: { // Begin CSS Minify Plugin
            target: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/styles/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'app/assets/styles/css',
                    ext: '.min.css'
                }]
            }
        },
        watch: { // Compile everything into one task with Watch Plugin
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'postcss','cssmin']
            }
        }
    });
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register Grunt tasks
    grunt.registerTask('default', ['watch']);
};