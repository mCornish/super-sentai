Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return [ Meteor.subscribe('notifications') ];
    }
});


Router.route('gifts/:_id', {
    name: 'giftPage',
    waitOn: function() {
        return Meteor.subscribe('comments', this.params._id);
    },
    data: function() { return Gifts.findOne(this.params._id); }
});

Router.route('gifts/:_id/edit', {
    name: 'giftEdit',
    data: function() { return Gifts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'giftSubmit'});

// main page; at the bottom because its the lease specific
Router.route('/:giftsLimit?', {
    name: 'giftsList',
    // limit the number of posts per page
    waitOn: function() {
        var limit = parseInt(this.params.giftsLimit) || 7;
        return Meteor.subscribe('gifts', {sort: {submitted: -1}, limit:limit});
    },
    data: function() {
        var limit = parseInt(this.params.giftsLimit) || 7;
        return {
            gifts: Gifts.find({}, {sort: {submitted: -1}, limit: limit})
        };
    }
});


var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};

Router.onBeforeAction('dataNotFound', {only: 'giftPage'});
Router.onBeforeAction(requireLogin, {only: 'giftSubmit'});