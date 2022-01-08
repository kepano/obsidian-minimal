module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env : {
            local : {
              src : ".env"
            }
        },
        sass: {
            unminified: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    'src/main.full.css' : 'src/scss/index.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'src/css/main.css' : 'src/scss/index.scss'
                }
            }
        },
        copy: {
            local: { 
                expand: true,
                src: 'obsidian.css',
                dest: process.env.HOME + process.env.OBSIDIAN_PATH,
                rename: function(dest, src) {
                   return dest + 'Minimal.css';
                } 
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
                    'src/css/main.css' : 'src/css/main.css'
                }
            }
        },
        concat_css: {
            dist: {
                src: 'src/css/*.css',
                dest: 'obsidian.css'
            },
            unminified: {
                files: {
                  'Minimal.css': ['src/css/license.css','src/main.full.css','src/css/plugin-compatibility.css','src/css/style-settings.css']
                }
            }
        },
        watch: {
            css: {
                files: ['src/**/*.scss','src/**/*.css'],
                tasks: ['env','sass:dist','cssmin','concat_css:dist','copy','sass:unminified','concat_css:unminified']
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