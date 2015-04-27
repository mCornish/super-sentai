Template.giftItem.helpers({
    ownGift: function() {
        return this.userId === Meteor.userId();
    },
    wantText: function () {
        return 'Want';
    }
});