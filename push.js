var Push = require("parse-push");
var LastNotificationQuery = require('./lastNotificationQuery.js');
var NotificationRepo = require('./notificationRepo.js');

var lastNotificationQuery = new LastNotificationQuery();
lastNotificationQuery.getLast(function(post) {
  var push = new Push({
    applicationId: "Wqn0fChKZPtOQrKKYFySNRyFT7iIxOV3gYbCtB3t",
    restApiKey:    "HshDj1yR02GgjqzBbKrpWGOKitPXFHycD6vRUMnM"
  });

  //Now send to some channels
  push.sendToChannels(["all"], {alert: post.title, postId: post.ID}, function(error, data){
    if (error) {
      console.error("Oh no it went wrong!: " + error.message);
    } else {
      console.log("Notify post #", post.ID);
    }
  });
  
  var notificationRepo = new NotificationRepo();
  notificationRepo.save({ postId : post.ID }, function() {
  });

});