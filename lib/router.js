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
        return {sort: this.sort, limit: this.giftsLimit()};
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
            nextPath: hasMore ? this.nextPath() : null
        }
    }
});

NewGiftsController = GiftsListController.extend({
    sort: {submitted: -1, _id: -1},
    nextPath: function() {
        return Router.routes.newGifts.path({giftsLimit: this.giftsLimit() + this.increment})
    }
});

BestGiftsController = GiftsListController.extend({
    sort: {wants: -1, submitted: -1, _id: -1},
    nextPath: function() {
        return Router.routes.bestGifts.path({giftsLimit: this.giftsLimit() + this.increment})
    }
});

Router.route('/', {
    name: 'home',
    controller: NewGiftsController
});
Router.route('/new/:giftsLimit?', {name: 'newGifts'});
Router.route('/best/:giftsLimit?', {name: 'bestGifts'});


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