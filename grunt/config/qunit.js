module.exports = {
    options: {
        phantomPath: 'node_modules/phantomjs/lib/phantom/phantomjs.exe'
    },
    all:  '<%= project.test %>/*.html'
};
