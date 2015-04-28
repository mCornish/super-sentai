Meteor.publish('gifts', function(options) {
    check(options, {
        sort: Object,
        limit: Number
    });

    return Gifts.find({}, options);
});

Meteor.publish('comments', function(giftId) {
    check(giftId, String);
    return Comments.find({giftId: giftId});
});

Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId, read: false});
});