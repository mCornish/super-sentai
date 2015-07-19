Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return [ Meteor.subscribe('notifications') ];
    }
});


Router.route('characters', {
    waitOn: function() {
        return [
            Meteor.subscribe('actors')
        ];
    },
    data: function() {
        return {
            characters: Actors.find()
        }
    }
});

Router.route('talk/:_id/:turn', {
    name: 'dialogue',
    waitOn: function() {
        return [
            Meteor.subscribe('singleActor', this.params._id),
            Meteor.subscribe('singleConvo', this.params._id, this.params.turn)
        ];
    },
    data: function() {
        return {
            actor: Actors.findOne(this.params._id),
            convo: Convos.findOne({actor: this.params._id, turn: parseInt(this.params.turn)})
        }
    }
});

Router.route('stage', {
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

Router.route('options');

Router.route('end');

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