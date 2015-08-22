Template.layout.onRendered( function() {
    Session.setDefault('turns', 4);
    Session.setDefault('score', 0);
    Session.setDefault('win', false);

    Session.setDefault('dimitriMood', 'Neutral');
    Session.setDefault('dimitriMorale', 0);
    Session.setDefault('haveTalkedDimitri', false);

    Session.setDefault('giselleMood', 'Neutral');
    Session.setDefault('giselleMorale', 0);
    Session.setDefault('haveTalkedGiselle', false);

    Session.setDefault('kaiMood', 'Neutral');
    Session.setDefault('kaiMorale', 0);
    Session.setDefault('haveTalkedKai', false);

    Session.setDefault('marcelMood', 'Neutral');
    Session.setDefault('marcelMorale', 0);
    Session.setDefault('haveTalkedMarcel', false);

    Session.setDefault('playing', false);
    Session.setDefault('hasMusic', true);
});