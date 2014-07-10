grunt-freddie
=============

Start a freddie server

Getting started
---------------

This plugin requires Grunt

If you haven't used [Grunt][1] before, be sure to check out the
[Getting Started][2] guide, as it explains how to create a [Gruntfile][3] as
well as install and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```sh
npm install grunt-freddie --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-freddie');
```

Freddie task
------------

The servers launched by this task only run as long as grunt is running.

This is the same behavior used by the [grunt-contrib-connect][4] plugin due to
the architecture of [grunt][1].

From the [grunt-contrib-connect][4] documentation:

>   This task was designed to be used in conjunction with another task that is
    run immediately afterwards, like the grunt-contrib-qunit plugin qunit task.

Even if that is a valid use case for the **freddie** plugin, its main purpose
is to launch project-related servers for its use during development such as
static or proxy servers for the project runtime, documentation server, etc ...

That servers must keep running while developing, better in a console reserved
for them so we can see logging information and stop them with `Ctrl+C`.

For this reason is recommended to use this plugin in conjuntion with other
blocking plugins like [grunt-contrib-watch][5] or [grunt-daemon][6]

### grunt-contrib-watch

If you register a task with **freddie** targets and a [watch][5] at the end,
the servers will keep alive as long as the [watch][5] daemon is running

```js
grunt.renameTask('watch', 'delta');
grunt.registerTask('watch', ['freddie', ..., 'delta']);
```

### grunt-daemon

[grunt-daemon][6] allows a task to become a daemon

    grunt daemon:freddie

You can specify the targets you want to execute

    grunt daemon:freddie:foo:bar

causing `freddie:foo` and `freddie:bar` to be executed

In order to add sugar to the command-line you can add the following snippet
to your `Gruntfile.js` which creates a task (`server` in the example) that
acts as an alias to `daemon:freddie`

```js
grunt.registerTask('server', function () {
  grunt.task.run(['daemon', 'freddie'].concat(this.args).join(':'));
});
```

Then, from the command-line

    grunt server

Or select the targets you want

    grunt server:foo

### Options

Any specified option will be passed through directly to **freddie**, thus you
can specify any option that **freddie** supports. See the
[freddie documentation][7] for a list of supported options.

The target name is used as server name, so you does not need to specify it
through the `name` config attribute

### Sample configuration

```js
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-freddie');
  grunt.loadNpmTasks('grunt-daemon');

  grunt.registerTask('server', function () {
    grunt.task.run(['daemon', 'freddie'].concat(this.args).join(':'));
  });

  grunt.initConfig({
    freddie: {
      dev: {
        options: {
          root: 'build',
          port: 3000,
          fixtures: {
            '/api': 'test/fixtures'
          }
        }
      },
      pre: {
        options: {
          root: 'dist/bin',
          port: 4000,
          proxy: {
            '/api': 'http://backend.com:8080/'
          }
        }
      },
      doc: {
        options: {
          root: 'doc',
          port: 5000
        }
      }
    }
  });
};
```

License
-------

The MIT License (MIT)

[1]: http://gruntjs.com/
[2]: http://gruntjs.com/getting-started
[3]: http://gruntjs.com/sample-gruntfile
[4]: https://github.com/gruntjs/grunt-contrib-connect
[5]: https://github.com/gruntjs/grunt-contrib-watch
[6]: https://github.com/Scytl/grunt-daemon
[7]: https://github.com/Scytl/freddie
