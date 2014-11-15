module.exports = function (grunt) {

grunt.initConfig({


    dev_prod_switch: {
        options: {
            // Can be ran as `grunt --env=dev` or `grunt --env=prod`
            environment: grunt.option('env') || 'dev',
                env_char: '#',
                env_block_dev: 'env:dev',
                env_block_prod: 'env:prod',
                env_block_test: 'env:test'
        },
        all: {
            files: {
                'test.html': 'test.html'
            }
        }
    }



});

grunt.loadNpmTasks('grunt-dev-prod-switch');
grunt.registerTask('default', [
    'dev_prod_switch'
]);

};