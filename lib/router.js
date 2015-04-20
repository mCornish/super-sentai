Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('gifts'); }
});

Router.route('/', {name: 'giftsList'});
Router.route('gifts/:_id', {
    name: 'giftPage',
    data: function() { return Gifts.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'giftPage'});