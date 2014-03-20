# grunt-resize-crop

> Make images a specific size without distorting the aspect ratio. Resizes as close as possible and crops the rest.

## Getting Started
This plugin requires [Grunt](http://gruntjs.com/) `~0.4.4` -- [Learn to use Grunt](http://gruntjs.com/getting-started)

Install the plugin with this command:

```shell
npm install grunt-resize-crop --save-dev
```

Enable in your Gruntfile with:

```js
grunt.loadNpmTasks('grunt-resize-crop');
```


## The "resize_crop" task

### Overview
In your project's Gruntfile, add a section named `resize_crop` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  resize_crop: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
