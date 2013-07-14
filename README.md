# grunt-dev-prod-switch

> Use to replace previously defined HTML comment blocks in project files to easy switching environment from development to production and back.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dev-prod-switch --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dev-prod-switch');
```

## The "dev_prod_switch" task

### Overview
In your project's Gruntfile, add a section named `dev_prod_switch` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    
// ... other stuff
    
dev_prod_switch: {
    options: {
        environment: 'prod' // 'prod' or 'dev'
    },
    all: {
        files: {
            'app/index.html': 'app/index.html', // source: destination 
            'app/templates/file.html': 'app/templates/file.html', // source: destination
            'app/some-file.html': 'app/some-file.html' // source: destination
        }
    }
},
    
// ... other stuff
    
})
```

In html place code depending on environment as follows:

```
<!-- env:dev -->
    <h1>For devs eyes only</h1>
    <p>This will be visable in 'dev' environment</p>
<!-- env:dev:end -->


<!-- env:prod -->
    <h1>For everyone</h1>
    <p>This will be visable in 'prod' environment</p>
<!-- env:prod:end -->

```

### Options

#### options.environment
Type: `String`
Default value: NONE

A string value that is used to do define the environment.

## Release History
_(Nothing yet)_
