Gifts = new Mongo.Collection('gifts');

Meteor.methods({
    giftInsert: function(giftAttributes) {
        check(Meteor.userId(), String);
        check(giftAttributes, {
            title: String,
            image: String,
            link: String,
            price: Number,
            age: Number
        });
        var user = Meteor.user();
        var gift = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var giftId = Gifts.insert(gift);
        return {
            _id: giftId
        };
    }
});