Template.characters.onRendered( function() {
    Session.setDefault('playerName', null);
    Session.set('showHud', false);
});

Template.characters.helpers({
   playerName: function() {
       return Session.get('playerName');
   }
});

Template.characters.events({
    'click [data-hook=name-input]': function(e) {
        var name = $('[data-hook=name]').val();

        Session.set('playerName', name);
    }
});
