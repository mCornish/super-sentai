Meteor.publish('gifts', function() {
    return Gifts.find();
});

Meteor.publish('comments', function(giftId) {
    check(giftId, String);
    return Comments.find({giftId: giftId});
});