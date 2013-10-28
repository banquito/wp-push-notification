var rest = require('restler');

var LastPostsQuery = function() {
  this.getAll = function(callback) {
    var urlPosts = 'http://www.elgalpondebanquito.com.ar/wp-json.php/posts';
    rest.get(urlPosts).on('complete', function(posts) {
      callback(posts[0]);
    });
  };
};

module.exports = LastPostsQuery;