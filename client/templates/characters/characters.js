Template.characters.onRendered( function() {
    Session.set('playerName', null);
    Session.set('showHud', false);
});

Template.characters.events({
    'click [data-hook=name-input]': function(e) {
        var name = $('[data-hook=name]').val();

        Session.set('playerName', name);
    }
});
