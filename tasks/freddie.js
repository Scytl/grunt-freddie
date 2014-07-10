'use strict';

var freddie = require('freddie');

module.exports = function (grunt) {
  grunt.registerMultiTask('freddie', 'Start a freddie server', function () {
    var done = this.async();

    freddie(this.options({
      name: this.target,
      onListen: function (name, port) {
        console.log(name, 'listening on port', port);
        done();
      }
    }));
  });
};
