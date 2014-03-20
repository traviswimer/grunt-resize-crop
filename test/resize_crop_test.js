'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var fs = require('fs'); // filesystem
var imageSize = require('image-size');  // gets image dimensions

exports.resize_crop = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {
    test.expect(6);

    var image1Path = 'test/tmp/3000x3000.png';
    var image1Exists = fs.existsSync(image1Path);
    test.equal(image1Exists, true, 'first image should exist');

    var dimensions1 = imageSize(image1Path);
    test.equal(dimensions1.height, 100, 'first image should have height of 100px');
    test.equal(dimensions1.width, 100, 'first image should have width of 100px');

    var image2Path = 'test/tmp/3000x1500.png';
    var image2Exists = fs.existsSync(image2Path);
    test.equal(image2Exists, true, 'second image should exist');

    var dimensions2 = imageSize(image2Path);
    test.equal(dimensions2.height, 100, 'first image should have height of 100px');
    test.equal(dimensions2.width, 100, 'first image should have width of 100px');

    grunt.log.writeln("WTF?!");

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var imagePath = 'test/tmp/1500x3000.jpg';
    var imageExists = fs.existsSync(imagePath);
    test.equal(imageExists, true, 'image should exist when made with custom options');

    test.done();
  },
};
