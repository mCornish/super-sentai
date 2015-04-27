Template.giftPage.helpers({
    comments: function() {
        return Comments.find({giftId: this._id});
    }
});