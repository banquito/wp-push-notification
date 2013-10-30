var NotificationRepo = function() {
	var fs = require('fs');
  var notifications = [];

  this.getAll = function (callback) {
    fs.readFile('notifications.json', function read(err, data) {
      if(err) {
        console.log(err);
      }
      if (data) {
        notifications = JSON.parse(data);
      }
      callback(notifications);
    });
  };

  this.save = function(notification, callback) {
    this.getAll(function() {
      notifications.push(notification);
      fs.writeFile("notifications.json", JSON.stringify(notifications), function(err) {
        if(err) {
          console.log(err);
        }
        callback();
      });   
    });
  };

};

module.exports = NotificationRepo;