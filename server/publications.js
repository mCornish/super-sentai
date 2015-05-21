Meteor.publish('gifts', function(queries, options) {
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

Meteor.publish('recipients', function() {
    return Recipients.find();
});

Meteor.publish('recipientsByGender', function(gender) {
    return Recipients.find( {$or: [ {gender: gender}, {gender: 'neutral'} ] });
});

Meteor.publish('users', function() {
    return Meteor.users.find();
});