var LastPostsQuery = function() {
  this.getAll = function(callback) {
    callback({ title: "hola"});
  };
};

module.exports = new LastPostsQuery();