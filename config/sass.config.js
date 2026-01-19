// Custom sass config to use dart-sass instead of deprecated node-sass
var nodeSass = require('sass');

module.exports = {
  includePaths: [
    'node_modules/ionic-angular/themes',
    'node_modules/ionicons/dist/scss',
    'node_modules/ionic-angular/fonts'
  ],
  
  // Use dart-sass implementation
  nodeSass: nodeSass,
  
  // Provide render method compatible with node-sass API
  render: function(options, callback) {
    nodeSass.render(options, callback);
  }
};
