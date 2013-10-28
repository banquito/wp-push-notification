var lastPostsQuery = require('./lastPostsQuery.js');

lastPostsQuery.getAll(function(posts) {
  console.log(JSON.stringify(posts));
});