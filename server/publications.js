// giftsList publication
Meteor.publish('gifts', function(options, queries) {
    queries = typeof queries !== 'undefined' ? queries : {};

    check(options, {
        sort: Object,
        limit: Number
    });

    return Gifts.find(queries, options);
});

Meteor.publish('giftsAge', function(minAge, maxAge) {
    check(minAge, Number);
    check(maxAge, Number);

    console.log(minAge + ' ' + maxAge);

    return Gifts.find({ $and: [ { age: {$gte: minAge} }, { age: {$lte: maxAge} } ] });
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