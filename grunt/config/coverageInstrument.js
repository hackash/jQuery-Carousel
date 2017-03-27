module.exports = {
    test: {
        src: '<%= project.app %>/js/*.js',
        expand: true,
        dest: '<%= project.temp %>'
    }
};