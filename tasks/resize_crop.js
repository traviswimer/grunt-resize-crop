/*
 * grunt-resize-crop
 * https://github.com/traviswimer/grunt-resize-crop
 *
 * Copyright (c) 2014 Travis Wimer
 * Licensed under the MIT license.
 */

'use strict';


var resizeCrop = require('resize-crop');
var deepExtend = require('deep-extend');


module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('resize_crop', 'Make images a specific size without distorting the aspect ratio. Resizes as close as possible and crops the rest.', function() {
    
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      format: "png",
      gravity: "center",
      height: 0,
      width: 0
    });

    // handle figuring out when the task has completed
    var groupsProcessed = 0;
    var groupsToProcess = this.files.length;

    var checkGroupsFinished = function(){
      groupsProcessed++;
      if( groupsProcessed >= groupsToProcess ){
        done();
      }
    };


    // Iterate over all specified image groups.
    this.files.forEach(function(f) {

      // Handle completion of group
      var filesProcessed = 0;
      var filesToProcess = 0;

      var checkFilesFinished = function(){
        filesProcessed++;
        if( filesProcessed >= filesToProcess ){
          checkGroupsFinished();
        }
      };

      // Create array of existing image files
      var validFiles = f.src.filter(function(filepath) {

        // Warn on invalid source files
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Image file "' + filepath + '" not found.');
          return false;
        } else {
          filesToProcess++;
          return true;
        }

      });



      // Resize-crop all valid images
      validFiles.forEach(function(filepath) {

        // Pull out file name from path and remove extension
        var filename = filepath.replace(/^.*[\\\/]/, '');
        filename = (filename.split("."))[0];

        var rcOptions = {
          src: filepath,
          dest: f.dest + '/' + filename + '.' + options.format
        };



        // Adds local options onto the global options
        deepExtend(rcOptions, options);

        var util = require('util');

        resizeCrop( rcOptions, function(err, thePath){

          if( !err ){
            // Print a green success message.
            grunt.log.ok( ('Image created: ' + thePath).green );
          }else{
            grunt.log.warn( 'Failed to create: "' + thePath );
          }
          checkFilesFinished();

        });

      });

    });
  });

};
