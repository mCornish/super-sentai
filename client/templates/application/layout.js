Template.layout.onRendered(function() {
    // initialize audio on/off
    var hasMusic = Session.get('hasMusic');
    $('[data-hook=music]').prop('muted', !hasMusic);
});

Template.layout.helpers({
    showHud: function() {
        return Session.get('showHud');
    }
});