/**
 * @file
 * @author Albert Cyberhulk
 * @date 05/10/15
 */

// The actual grunt server settings
var serveStatic = require('serve-static');

module.exports = {
  options: {
    port: 9000,
    // Change this to '0.0.0.0' to access the server from outside.
    hostname: 'localhost',
    livereload: 35729,
    base: {
      path: '<%= project.temp %>',
        options: {
          index: 'index.html'
        }
    }
  },
  livereload: {
    options: {
      open: true,
      base: [
        '<%= project.temp %>',
        '<%= project.app %>'
      ]
    }
  },
  testcoverage: {
     options: {
       port: 9002,
       hostname: '127.0.0.1',
       middleware: function (connect) {
            return [
               serveStatic('<%= project.temp %>'),
               serveStatic('<%= project.app %>/js'),
               serveStatic('<%= project.test %>')
           ]
        }
     }
  }
};
