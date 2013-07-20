# grunt-dev-prod-switch

> Use to switch between previously defined comment blocks in project files to change environment from development to production and back.

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
    
...
    
dev_prod_switch: {
            options: {
                environment: 'dev',
                env_char: '#',
                env_block_dev: 'env:dev',
                env_block_prod: 'env:prod'
            },
            all: {
                files: {
                    'app/index.html': 'app/index.html',
                    'app/js/main.js': 'app/js/main.js'
                }
            }
        }
    
...
    
});
```

In _html_ or _ColdFusion_ type of files place the code depending on environment as follows:

```
...

<!-- env:dev -->
    <h1>For devs eyes only</h1>
    <p>This will be visable in 'dev' environment</p>
<!-- env:dev:end -->


<!-- env:prod -->
    <h1>For everyone</h1>
    <p>This will be visable in 'prod' environment</p>
<!-- env:prod:end -->

...

```

In _C_, _Java_, _JavaScript_ type of files place the code depending on environment as follows:

```
...

/* env:dev */
    function add(a,b) { 
        console.log('ADD: ' + a + ' + ' + b + ' = ' + (a + b));
        return a+b;
    }
/* env:dev:end */


/* env:prod */
    function add(a,b) { 
        return a+b;
    }
/* env:prod:end */

...

```


### Options

#### options.environment _(requered)_
Type: `String`
Default value: NONE

A string value that is used to do define the environment.

#### options.env_char _(optional)_
Type: `String`
Default value: '#'

Default character to block the comment.

#### options.env_block_dev _(optional)_
Type: `String`
Default value: 'env:dev'

Override the default string of the comment. 
So the task will be searching for `<!-- env:dev -->` comment blocks

#### options.env_block_prod _(optional)_
Type: `String`
Default value: 'env:prod'

Override the default string of the comment. 
So the task will be searching for `<!-- env:prod -->` comment blocks


## Release History
#### 0.1.4
* Fix: Oops, used reserved word.

#### 0.1.3
* Add: Override options
* Add: Support for files with `/* comment */` comments styles

#### 0.1.2
* It's a live