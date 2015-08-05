Template.home.onRendered( function() {
    Session.set('turns', 6);
    Session.set('score', 0);
    Session.set('kaiMood', 'Neutral');
    Session.set('dimitriMood', 'Neutral');
    Session.set('marcelMood', 'Neutral');
    Session.set('giselleMood', 'Neutral');
    Session.set('win', false);
});