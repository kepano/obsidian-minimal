module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env : {
            local : {
              src : ".env"
            }
        },
        sass: {
            local: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    'src/local.css' : 'src/scss/index.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'src/css/obsidian.css' : 'src/scss/index.scss'
                }
            }
        },
        copy: {
            local: { 
                expand: true,
                src: 'Minimal.css',
                dest: process.env.HOME + process.env.OBSIDIAN_PATH
            }
        },
        cssmin: {
            options: {
                advanced: false,
                aggressiveMerging: false,
                mediaMerging: false,
                restructuring: false
            },
            target: {
                files: {
                    'src/css/obsidian.css' : 'src/css/obsidian.css'
                }
            }
        },
        concat_css: {
            dist: {
                src: 'src/css/*.css',
                dest: 'obsidian.css'
            },
            local: {
                files: {
                  'Minimal.css': ['src/css/license.css','src/local.css','src/css/plugin-compatibility.css','src/css/style-settings.css']
                }
            }
        },
        watch: {
            css: {
                files: ['src/**/*.scss','src/**/*.css'],
                tasks: ['env', 'sass:local','concat_css:local','copy:local','sass:dist','cssmin','concat_css:dist']
            }
        }
    });
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('loadconst', 'Load constants', function() {
        grunt.config('OBSIDIAN_PATH', process.env.OBSIDIAN_PATH);
    });
    grunt.registerTask('default',['env:local','loadconst','watch']);
}