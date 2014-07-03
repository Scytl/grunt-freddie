'use strict';

var fess = require('fess');

var defaults = {
  root: process.cwd(),
  port: 3000,
  name: 'server'
};

module.exports = function (grunt) {
  grunt.registerMultiTask('fess', 'Start a fess server', function () {
    var options = this.options(defaults);
    this.async();

    fess(options);
  });
};
