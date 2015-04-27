Gifts = new Mongo.Collection('gifts');

Gifts.allow({
    update: function(userId, gift) { return ownsDocument(userId, gift); },
    remove: function(userId, gift) { return ownsDocument(userId, gift); }
});

Gifts.deny({
    update: function(userId, gift, fieldNames) {
        //may only edit accessible fields:
        return (_.without(fieldNames, 'title', 'image', 'link', 'price', 'age').length > 0);
    }
});

Gifts.deny({
    update: function(userId, gift, fieldNames, modifier) {
        var errors = validateGift(modifier.$set);
        return errors.title || errors.image;
    }
});

validateGift = function(gift) {
    var errors = {};
    if (!gift.title)
        errors.title = 'Please fill in a headline';
    if (!gift.image)
        errors.image = 'Please include an image';
    return errors;
};

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

        var errors = validateGift(giftAttributes);
        if (errors.title || errors.image)
            throw new Meteor.Error('invalid-gift', 'You must set a title and image for your image.');

        var user = Meteor.user();
        var gift = _.extend(giftAttributes, {
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