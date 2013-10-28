var Push = require("parse-push");
var LastPostsQuery = require('./lastPostsQuery.js');

var lastPostsQuery = new LastPostsQuery();
lastPostsQuery.getAll(function(post) {
    
  var push = new Push({
    applicationId: "Wqn0fChKZPtOQrKKYFySNRyFT7iIxOV3gYbCtB3t",
    restApiKey:    "HshDj1yR02GgjqzBbKrpWGOKitPXFHycD6vRUMnM"
  });

  //Now send to some channels
  push.sendToChannels(["all"], {alert: post.title}, function(error, data){
    if (error) {
      console.error("Oh no it went wrong!: " + error.message);
    } else {
      console.log("It went well! ", data);
    }
  });

});