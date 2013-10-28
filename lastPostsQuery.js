var LastPostsQuery = function() {
  this.getAll = function(callback) {
    callback({ title: "hola mundo"});
  };
};

module.exports = LastPostsQuery;