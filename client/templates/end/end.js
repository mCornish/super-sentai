Template.end.onRendered( function() {
    Session.setDefault('showOutro', true);
    Session.set('showHud', false);
});

Template.end.helpers({
    showOutro: function() {
        return Session.get('showOutro');
    },
    score: function() {
        return Session.get('score');
    }
});

Template.end.events({
    'ended [data-hook="outro-video"]': function(e) {
        e.preventDefault();
        Session.set('showOutro', false);
    },
    'click [data-hook="skip"]': function(e) {
        e.preventDefault();
        Session.set('showOutro', false);
    }
});