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
    ageQuery: function() {
        var minAge = parseInt(this.params.query.minAge) || 0;
        var maxAge = parseInt(this.params.query.maxAge) || 100;
        return { $and: [ { age: {$gte: minAge} }, { age: {$lte: maxAge} } ] };
    },
    priceQuery: function() {
        var minPrice = parseFloat(this.params.query.minPrice) || 0.00;
        var maxPrice = parseFloat(this.params.query.maxPrice) || 100000.00;
        return { $and: [ { price: {$gte: minPrice} }, { price: {$lte: maxPrice} } ] };
    },
    query: function() {
        return { $and: [ this.ageQuery(), this.priceQuery() ] };
    },
    findOptions: function() {
        return {sort: this.sort, limit: this.giftsLimit()};
    },
    subscriptions: function() {
        this.giftsSub = Meteor.subscribe('gifts', this.ageQuery(), this.findOptions());
    },
    gifts: function() {
        return Gifts.find(this.query(), this.findOptions());
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

Router.route('browse', {
    name: 'browse',
    template: 'giftsList',
    controller: NewGiftsController
});

Router.route('browse/new/:giftsLimit?', {name: 'newGifts'});
Router.route('browse/best/:giftsLimit?', {name: 'bestGifts'});

Router.route('/find/:gender?', {
    name: 'find',
    waitOn: function() {
        if (this.params.gender) {
            return [
                Meteor.subscribe('gifts'),
                Meteor.subscribe('recipientsByGender', this.params.gender)
            ];
        } else {
            return [
                Meteor.subscribe('gifts'),
                Meteor.subscribe('recipients')
            ]
        }
    },
    data: function() {
        if (this.params.gender) {
            var gender = this.params.gender;
            if (gender === 'male') {
                return {
                    recipients: Recipients.find(
                        {$or: [ {gender: gender}, {gender: 'neutral'} ] },
                        {limit: 11, sort: {giftCount: -1}}
                    ),
                    routeGender: gender,
                    genderPossessive: 'his'
                }

            } else {
                return {
                    recipients: Recipients.find(
                        {$or: [ {gender: gender}, {gender: 'neutral'} ] },
                        {limit: 11, sort: {giftCount: -1}}
                    ),
                    routeGender: gender,
                    genderPossessive: 'her'
                }
            }
        } else {
            return {
                recipients: Recipients.find({gender: 'neutral'}, {limit: 11, sort: {giftCount: -1}})
            }
        }
    }
});

Router.route('login', {name: 'login'});

Router.route('account', {name: 'account'});

Router.route('admin', {name: 'admin'});


Router.route('/', {
    name: 'home',
    waitOn: function() {
        if (Meteor.userId()) {
            // fetch gifts posted by user
            Meteor.subscribe('gifts', {'userId': Meteor.userId()}, {limit: 9, sort: {submitted: -1}} );
            // fetch gifts wanted by user
            Meteor.subscribe('gifts', {'wanters': Meteor.userId()}, {limit: 9, sort: {submitted: -1}} );
        }
    },
    data: function() {
        return {
            user: Meteor.user(),
            gifts: Gifts.find({'userId': Meteor.userId()}, {limit: 9, sort: {submitted: -1}}),
            wants: Gifts.find({'wanters': Meteor.userId()}, {limit: 9, sort: {submitted: -1}})
        }
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