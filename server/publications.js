Meteor.publish('gifts', function(queries, options) {
    queries = typeof queries !== 'undefined' ? queries : {};

    if (options) {
        check(options, {
            sort: Object,
            limit: Number
        });
    } else {
        options = {};
    }

    return Gifts.find(queries, options);
});


//publish all Actors
Meteor.publish('actors', function() {
    return Actors.find();
});

//publish single Actor
Meteor.publish('singleActor', function(id) {
    return Actors.find(id);
});


//public single Convo
Meteor.publish('singleConvo', function(actorId) {
    return Convos.find({actor: actorId});
});


Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId, read: false});
});

Meteor.publish('recipients', function() {
    return Recipients.find();
});
Meteor.publish('recipientsByGender', function(gender) {
    gender = typeof gender !== 'undefined' ? gender : 'neutral';
    return Recipients.find( {$or: [ {gender: gender}, {gender: 'neutral'} ] });
});

Meteor.publish('occasions', function() {
    return Occasions.find();
});

Meteor.publish('users', function() {
    return Meteor.users.find();
});