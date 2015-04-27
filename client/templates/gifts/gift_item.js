Template.giftItem.helpers({
    ownGift: function() {
        return this.userId === Meteor.userId();
    },
    wantText: function () {
        return 'Want';
    },
    commentsCount: function() {
        var count = Comments.find({giftId: this._id}).count();

        if (count > 0)
            return count;
        return 'So far, no '
    }
});