module.exports = function (grunt) {
	//require('time-grunt')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
      dist: {
        files: {
          'assets/css/main.css' : 'assets/scss/*.scss'
        }
      }
    },
    less: {
      dist: {
        files: {
          'assets/css/main.css' : 'assets/less/*.less'
        }
      }
    },
    watch : {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
          livereloadOnError: true
        }
      },
      sass: {
        files: '**/*.less',
        tasks: ['less'],
        options: {
          livereload: true,
          livereloadOnError: true
        }
      }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['watch']);

};
