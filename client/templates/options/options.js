Template.options.onRendered(function() {
    Session.setDefault('hasSound', true);
    Session.setDefault('hasMusic', true);

    // initialize audio on/off
    var hasMusic = Session.get('hasMusic');
    $('[data-hook=music]').prop('muted', !hasMusic);
});

Template.options.helpers({
    soundToggle: function() {
        return Session.get('hasSound') ? 'On' : 'Off';
    },
    musicToggle: function() {
        return Session.get('hasMusic') ? 'On' : 'Off';
    }
});

Template.options.events({
    'click [data-hook=sound]': function(e) {
        e.preventDefault();

        Session.set('soundOn', !Session.get('soundOn'));
    },
    'click [data-hook=music]': function(e) {
        e.preventDefault();

        var hasMusic = Session.get('hasMusic');
        Session.set('hasMusic', !hasMusic);

        // toggle muted status
       $('[data-hook=music]').prop('muted', hasMusic);
    }
});