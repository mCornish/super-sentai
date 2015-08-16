Template.home.onRendered( function() {
    Session.set('turns', 6);
    Session.set('score', 0);
    Session.set('win', false);

    Session.set('dimitriMood', 'Neutral');
    Session.set('dimitriMorale', 0);
    Session.set('haveTalkedDimitri', false);

    Session.set('giselleMood', 'Neutral');
    Session.set('giselleMorale', 0);
    Session.set('haveTalkedGiselle', false);

    Session.set('kaiMood', 'Neutral');
    Session.set('kaiMorale', 0);
    Session.set('haveTalkedKai', false);


    Session.set('marcelMood', 'Neutral');
    Session.set('marcelMorale', 0);
    Session.set('haveTalkedMarcel', false);
});