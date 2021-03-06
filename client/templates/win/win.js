Template.win.onRendered( function() {
    Session.set('showOutro', true);
    Session.set('showHud', false);
});

Template.win.helpers({
    showOutro: function() {
        return Session.get('showOutro');
    },
    score: function() {
        return Session.get('score');
    }
});

Template.win.events({
    'ended [data-hook="outro-video"]': function(e) {
        e.preventDefault();
        Session.set('showOutro', false);
    },
    'click [data-hook="skip"]': function(e) {
        e.preventDefault();
        Session.set('showOutro', false);
    }
});