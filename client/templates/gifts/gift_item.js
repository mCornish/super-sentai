Template.giftItem.helpers({
    ownGift: function() {
        return this.userId === Meteor.userId();
    },
    displayClass: function() {
        console.log(Session.get('activeGift') + ' ' + this._id);
        if (Session.get('activeGift') === this._id) {
            return ''
        } else {
            return 'hidden'
        }
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
    'click [data-hook="image"]': function(e) {
        e.preventDefault();
        Meteor.subscribe('comments', this._id);
        Session.set('activeGift', this._id);
        path = window.location.pathname;
        history.pushState({}, 'Gift', '/gifts/' + this._id);
    },
    'click [data-hook="shade"]': function(e) {
        e.preventDefault();
        Session.set('activeGift', '');
        history.pushState({}, 'Find', path);
    },
    'click [data-hook="close"]': function(e) {
        e.preventDefault();
        Session.set('activeGift', '');
        history.pushState({}, 'Find', path);
    },
    'click [data-hook="want"].wantable': function(e) {
        e.preventDefault();
        Meteor.call('want', this._id);
    }
});