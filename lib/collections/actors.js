Actors = new Mongo.Collection('actors')

Actors.allow({
    update: function(userId, actor) { return true; }
});

Actors.deny({
    update: function(userId, actor, fieldNames) {
        return (_.without(fieldNames, 'mood', 'morale').length > 0);
    }
});