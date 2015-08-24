Template.lose.onRendered( function() {
    Session.set('showOutro', true);
    Session.set('showHud', false);
    Session.set('playFire', false);
});

Template.lose.helpers({
    showOutro: function() {
        return Session.get('showOutro');
    },
    score: function() {
        return Session.get('score');
    },
    muted: function() {
        return Session.get('playFire') ? '' : 'muted';
    }
});

Template.lose.events({
    'ended [data-hook="outro-video"]': function(e) {
        e.preventDefault();
        Session.set('showOutro', false);
        var fire = new Audio('audio/fire.mp3');
        fire.play();
        Session.set('playFire', true);
    },
    'click [data-hook="skip"]': function(e) {
        e.preventDefault();
        Session.set('showOutro', false);
        fire = new Audio('audio/fire.mp3');
        fire.volume = .2;
        fire.play();
        Session.set('playFire', true);
    },
    'click [data-hook=try-again]': function(e) {
        fire.pause();
        fire.currentTime = 0;
    }
});