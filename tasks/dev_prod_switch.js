/*
 * grunt-dev-prod-switch
 * https://github.com/sanusart/grunt-dev-prod-switch
 *
 * Copyright (c) 2013 Sasha Khamkov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('dev_prod_switch', 'Use to switch between previously defined HTML comment blocks in project files to change environment from development to production and back.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();

        // Iterate over all specified files.
        this.files.forEach(function (f) {
            var out = f.src.map(function (src) {
                if(options.environment === 'prod') {
                    var result = grunt.file.read(src, 'utf8')
                        .replace('<!-- env:prod --#>', '<!-- env:prod -->')
                        .replace('<!-- env:dev -->', '<!-- env:dev --#>');
                } else if(options.environment === 'dev') {
                    var result = grunt.file.read(src, 'utf8')
                        .replace('<!-- env:dev --#>', '<!-- env:dev -->')
                        .replace('<!-- env:prod -->', '<!-- env:prod --#>');
                } else {
                    grunt.log.writeln('Please set "environment" in options object.');
                }
                return result;
            });

            var env = (options.environment === 'prod') ? 'Production' : 'Development';
            grunt.log.writeln('Data in file "' + f.dest + '" set to "' + env + '".');

            grunt.file.write(f.dest, out);
        });

    });
};
