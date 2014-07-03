grunt-fess
==========

Start a fess server

Getting started
---------------

This plugin requires Grunt

If you haven't used [Grunt][1] before, be sure to check out the
[Getting Started][2] guide, as it explains how to create a [Gruntfile][3] as
well as install and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```sh
npm install grunt-fess --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fess');
```

Fess task
---------

This task launches a server and stops the grunt execution while the server is
running

Cannot be run with other tasks, so better if you open a new terminal dedicated
to this task and its logs

### Options

Any specified option will be passed through directly to **fess**, thus you can
specify any option that **fess** supports. See the [fess documentation][4] for
a list of supported options.

[1]: http://gruntjs.com/
[2]: http://gruntjs.com/getting-started
[3]: http://gruntjs.com/sample-gruntfile
[4]: https://github.com/pfraces/fess/blob/master/README.md
