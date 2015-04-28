Template.giftItem.helpers({
    ownGift: function() {
        return this.userId === Meteor.userId();
    },
    // disables want button when necessary
    wantedClass: function() {
        var userId = Meteor.userId();
        if (userId && !_.include(this.wanters, userId)) {
            return 'btn-primary wantable';
        } else {
            return 'disabled'
        }
    },
    pluralWants: function() {
        return this.wants > 1;
    }
});

Template.giftItem.events({
    'click [data-hook="want"].wantable': function(e) {
        e.preventDefault();
        Meteor.call('want', this._id);
    }
});