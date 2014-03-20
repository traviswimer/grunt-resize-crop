/*
 * grunt-resize-crop
 * https://github.com/traviswimer/grunt-resize-crop
 *
 * Copyright (c) 2014 Travis Wimer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/tmp/*'],
    },

    // Configuration to be run (and then tested).
    resize_crop: {
      default_options: {
        options: {
          height: 100,
          width: 100
        },
        files: {
          'test/tmp': [
            'test/images/3000x3000.png',
            'test/images/3000x1500.png'
          ],
        },
      },
      custom_options: {
        options: {
          format: "jpg",
          gravity: "north",
          height: 200,
          width: 200
        },
        files: {
          'test/tmp': [
            'test/images/1500x3000.png'
          ],
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

    watch: {
      scripts: {
        files: [
          'test/*_test.js',
          'src/**/*.js'
        ],
        tasks: ['test'],
      },
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', 'clean', 'resize_crop', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['watch']);

};
