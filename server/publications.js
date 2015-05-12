Meteor.publish('gifts', function(options, queries) {
    queries = typeof queries !== 'undefined' ? queries : {};

    if (options) {
        check(options, {
            sort: Object,
            limit: Number
        });
    }

    return Gifts.find(queries, options);
});

// giftPage publication
Meteor.publish('singleGift', function(id) {
    check(id, String);
    return Gifts.find(id);
});

Meteor.publish('comments', function(giftId) {
    check(giftId, String);
    return Comments.find({giftId: giftId});
});

Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId, read: false});
});