Template.giftPage.helpers({
    comments: function() {
        return Comments.find({giftId: this._id});
    },
    submittedMoment: function() {
        return moment(this.submitted).fromNow();
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
    },
    popupClass: function() {
        return Router.current().route.path(this).indexOf('browse') > -1 ? 'popup' : '';
    }
});