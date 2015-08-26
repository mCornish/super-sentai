Template.characters.onRendered( function() {
    Session.setDefault('playerName', null);
    Session.set('showHud', false);

    // bind Go button functionality to ENTER key
    $('body').on('keyup', function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();

            var name = $('[data-hook=name]').val();
            if (name === undefined || name === '') {
                name = 'John';
            }
            Session.set('playerName', name);
            Router.go('stage');
        }
    });
});

Template.characters.helpers({
   playerName: function() {
       return Session.get('playerName');
   }
});

Template.characters.events({
    'click [data-hook=name-input]': function(e) {
        var name = $('[data-hook=name]').val();
        if (name === undefined || name === '') {
            name = 'John';
        }
        Session.set('playerName', name);
    }
});

Template.characters.onDestroyed( function() {
    $('body').off('keyup');
});