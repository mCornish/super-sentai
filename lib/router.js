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
        return [
            Meteor.subscribe('singleGift', this.params._id),
            Meteor.subscribe('comments', this.params._id)
        ];
    },
    data: function() { return Gifts.findOne(this.params._id); }
});

Router.route('gifts/:_id/edit', {
    name: 'giftEdit',
    waitOn: function() {
        return [
            Meteor.subscribe('singleGift', this.params._id)
        ];
    },
    data: function() { return Gifts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'giftSubmit'});

GiftsListController = RouteController.extend({
    template: 'giftsList',
    increment: 7,
    giftsLimit: function() {
        return parseInt(this.params.giftsLimit) || this.increment;
    },
    findOptions: function() {
        return {sort: {submitted: -1}, limit: this.giftsLimit()};
    },
    subscriptions: function() {
        this.giftsSub = Meteor.subscribe('gifts', this.findOptions());
    },
    gifts: function() {
        return Gifts.find({}, this.findOptions());
    },
    data: function() {
        var hasMore = this.gifts().count() === this.giftsLimit();
        var nextPath = this.route.path({giftsLimit: this.giftsLimit() + this.increment});

        return {
            gifts: this.gifts(),
            // avoid calling loading template when subscription is updated
            ready: this.giftsSub.ready,
            nextPath: hasMore ? nextPath : null
        }
    }
});

// main page; at the bottom because its the lease specific
Router.route('/:giftsLimit?', {
    name: 'giftsList'
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