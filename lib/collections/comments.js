Comments = new Mongo.Collection('comments');

Meteor.methods({
    commentInsert: function (commentAttributes) {
        check(this.userId, String);
        check(commentAttributes, {
            giftId: String,
            body: String
        });
        var user = Meteor.user();
        var gift = Gifts.findOne(commentAttributes.giftId);
        if (!gift)
            throw new Meteor.Error('invalid-comment', 'You must comment on a post');
        comment = _.extend(commentAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });

        // update the gift with the number of comments
        Gifts.update(comment.giftId, {$inc: {commentsCount: 1}});

        return Comments.insert(comment);
    }
})