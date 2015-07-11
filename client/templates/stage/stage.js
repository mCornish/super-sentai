Template.stage.onRendered( function() {
    Session.setDefault('showIntro', true);
    Session.set('showHud', true);
});

Template.stage.helpers({
    showIntro: function() {
        return Session.get('showIntro');
    }
});

Template.stage.events({
    'ended [data-hook="intro-video"]': function(e) {
        e.preventDefault();
        Session.set('showIntro', false);
    },
    'click [data-hook="skip"]': function(e) {
        e.preventDefault();
        Session.set('showIntro', false);
    }
});