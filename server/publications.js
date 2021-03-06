//publish all Actors
Meteor.publish('actors', function() {
    return Actors.find();
});

//publish single Actor
Meteor.publish('singleActor', function(id) {
    return Actors.find(id);
});


//publish single Convo
Meteor.publish('singleConvo', function(actorId, turn) {
    return Convos.find({actor: actorId}, {turn: turn});
});


//publish all Notifications
Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId, read: false});
});