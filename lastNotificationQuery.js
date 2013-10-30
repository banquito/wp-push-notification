var PostsQuery = require('./postsQuery');
var NotificationRepo = require('./notificationRepo');

var LastNotificationQuery = function() {
  this.getLast = function(callback) {
    var postsQuery = new PostsQuery();
    var notificationRepo = new NotificationRepo();
    postsQuery.getAll(function(posts) {
      notificationRepo.getAll(function(notifications) {
        var notifyOne = false;
        posts.forEach(function (post) {
          var wasNotified = false;
          notifications.forEach(function (notification) {
            if (notification.postId == post.ID) {
              wasNotified = true;
            }
          })
          if (!notifyOne && !wasNotified) {
            notifyOne = true;
            callback(post);
          }
        });
      })
    })
  };
};

module.exports = LastNotificationQuery;
