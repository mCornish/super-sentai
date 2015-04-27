Meteor.publish('gifts', function() {
    return Gifts.find();
});

Meteor.publish('comments', function() {
    return Comments.find();
});