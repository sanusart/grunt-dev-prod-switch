/*
 * grunt-dev-prod-switch
 * https://github.com/sanusart/grunt-dev-prod-switch
 *
 * Copyright (c) 2013 Sasha Khamkov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('dev_prod_switch', 'Use to switch between previously defined HTML comment blocks in project files to change environment from development to production and back.', function () {

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options();
        var blocking_char = ((options.env_char) ? options.env_char : '#');
        var env_prod = (options.env_block_prod) ? options.env_block_prod : 'env:prod';
        var env_dev = (options.env_block_dev) ? options.env_block_dev : 'env:dev';
        var env_test = (options.env_block_test) ? options.env_block_test : 'env:test';

        // Iterate over all specified files.
        this.files.forEach(function (f) {
            var out = f.src.map(function (src) {
                if (options.environment === 'prod') {
                    var result = grunt.file.read(src, "utf8")
                        .replace(new RegExp("<\!-- " + env_prod + " --" + blocking_char + ">","gi"), "<!-- " + env_prod + " -->")
                        .replace(new RegExp("<\!-- " + env_dev + " -->","gi"), "<!-- " + env_dev + " --" + blocking_char + ">")
                        .replace(new RegExp("<\!-- " + env_test + " -->","gi"), "<!-- " + env_test + " --" + blocking_char + ">")
                        .split("/* " + env_prod + " *" + blocking_char+"/").join("/* " + env_prod + " */")
                        .split("/* " + env_dev + " */").join("/* " + env_dev + " *" + blocking_char+"/")
                        .split("/* " + env_test + " */").join("/* " + env_test + " *" + blocking_char+"/");
                } else if (options.environment === "dev") {
                    var result = grunt.file.read(src, "utf8")
                        .replace(new RegExp("<\!-- " + env_dev + " --" + blocking_char + ">","gi"), "<!-- " + env_dev + " -->")
                        .replace(new RegExp("<\!-- " + env_prod + " -->","gi"), "<!-- " + env_prod + " --" + blocking_char + ">")
                        .replace(new RegExp("<\!-- " + env_test + " -->","gi"), "<!-- " + env_test + " --" + blocking_char + ">")
                        .split("/* " + env_dev + " *" + blocking_char+"/").join("/* " + env_dev + " */")
                        .split("/* " + env_prod + " */").join("/* " + env_prod + " *" + blocking_char + "/")
                        .split("/* " + env_test + " */").join("/* " + env_test + " *" + blocking_char + "/");
                } else if (options.environment === "test") {
                    var result = grunt.file.read(src, "utf8")
                        .replace(new RegExp("<\!-- " + env_test + " --" + blocking_char + ">","gi"), "<!-- " + env_test + " -->")
                        .replace(new RegExp("<\!-- " + env_prod + " -->","gi"), "<!-- " + env_prod + " --" + blocking_char + ">")
                        .replace(new RegExp("<\!-- " + env_dev + " -->","gi"), "<!-- " + env_dev + " --" + blocking_char + ">")
                        .split("/* " + env_test + " *" + blocking_char+"/").join("/* " + env_test + " */")
                        .split("/* " + env_prod + " */").join("/* " + env_prod + " *" + blocking_char + "/")
                        .split("/* " + env_dev + " */").join("/* " + env_dev + " *" + blocking_char + "/");
                } else {
                    grunt.log.writeln('Please set "environment" in options object.');
                }
                return result;
            });

            var env = (options.environment === 'prod') ? 'Production' : (options.environment === 'dev') ? 'Development' : 'Test';
            grunt.log.writeln('Data in file "' + f.dest + '" switched to "' + env + '".');

            grunt.file.write(f.dest, out);
        });

    });
};