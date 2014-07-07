'use strict';

var fess = require('fess');

module.exports = function (grunt) {
  grunt.registerMultiTask('fess', 'Start a fess server', function () {
    var done = this.async();

    fess(this.options({
      name: this.target,
      onListen: function (name, port) {
        console.log(name, 'listening on port', port);
        done();
      }
    }));
  });
};
