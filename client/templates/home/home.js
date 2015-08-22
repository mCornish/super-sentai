Template.home.onRendered( function() {
    Session.set('showHud', false);
    // Further configuration in includes/config.js
});

Template.home.helpers({
    name: function() {
        return Meteor.user().username || Meteor.user().profile.name;
    }
});

Template.home.events({
    'click [data-hook="new-game"]': function(e) {
        //Session.set('playing', true);
        //
        //Session.set('turns', 6);
        //Session.set('score', 0);
        //Session.set('win', false);
        //
        //Session.set('dimitriMood', 'Neutral');
        //Session.set('dimitriMorale', 0);
        //Session.set('haveTalkedDimitri', false);
        //
        //Session.set('giselleMood', 'Neutral');
        //Session.set('giselleMorale', 0);
        //Session.set('haveTalkedGiselle', false);
        //
        //Session.set('kaiMood', 'Neutral');
        //Session.set('kaiMorale', 0);
        //Session.set('haveTalkedKai', false);
        //
        //Session.set('marcelMood', 'Neutral');
        //Session.set('marcelMorale', 0);
        //Session.set('haveTalkedMarcel', false);
    }
});