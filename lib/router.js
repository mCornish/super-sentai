Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return [ Meteor.subscribe('notifications') ];
    }
});


Router.route('talk/:_id', {
    name: 'dialogue',
    waitOn: function() {
        return [
            Meteor.subscribe('singleActor', this.params._id),
            Meteor.subscribe('singleConvo', this.params._id)
        ];
    },
    data: function() {
        return {
            actor: Actors.findOne(this.params._id),
            convo: Convos.findOne({actor: this.params._id})
        }
    }
});

Router.route('stage', {
    name: 'stage',
    waitOn: function() {
        return [
            Meteor.subscribe('actors')
        ];
    },
    data: function() {
        return {
            actors: Actors.find()
        }
    }
});

Router.route('options', {
    name: 'options'
});

Router.route('/', {
    name: 'home',
    waitOn: function() {

    },
    data: function() {

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
Router.onBeforeAction(requireLogin, {only: ['giftSubmit', 'account', 'admin']});