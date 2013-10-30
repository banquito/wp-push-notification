var rest = require('restler');

var lastPostsQuery = function() {
  this.getAll = function(callback) {
    var urlPosts = 'http://www.elgalpondebanquito.com.ar/wp-json.php/posts';
    rest.get(urlPosts).on('complete', function(posts) {
      callback(posts);
    });
  };
};

module.exports = lastPostsQuery;