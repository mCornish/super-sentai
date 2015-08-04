Template.options.onRendered(function() {
    Session.setDefault('soundOn', true);
    Session.setDefault('musicOn', true);
});

Template.options.helpers({
    soundToggle: function() {
        return Session.get('soundOn') ? 'On' : 'Off';
    },
    musicToggle: function() {
        return Session.get('musicOn') ? 'On' : 'Off';
    }
});

Template.options.events({
    'click [data-hook=sound]': function(e) {
        e.preventDefault();

        Session.set('soundOn', !Session.get('soundOn'));
    },
    'click [data-hook=music]': function(e) {
        e.preventDefault();

        Session.set('musicOn', !Session.get('musicOn'));
    }
});