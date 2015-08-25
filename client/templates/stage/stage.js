Template.stage.onRendered( function() {
    Session.setDefault('showIntro', true);
    Session.set('showHud', true);
});

Template.stage.helpers({
    showIntro: function() {
        return Session.get('showIntro');
    },
    disabledClass: function(name) {
        return Session.get('haveTalked' + name) ? 'isDisabled' : '';
    }
});

Template.stage.events({
    'ended [data-hook=intro-video]': function(e) {
        e.preventDefault();
        Session.set('showIntro', false);
    },
    'click [data-hook=skip]': function(e) {
        e.preventDefault();
        Session.set('showIntro', false);
    }
});