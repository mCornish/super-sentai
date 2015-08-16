Template.dialogue.onCreated( function() {
    var convo = Router.current().data().convo;
    var actor = Router.current().data().actor;
    var name = Session.get('playerName');
    var dIndex = 0;
    var dArray = convo.dialogue;

    // Dialogue array
    Session.set('dArray', dArray);
    // Dialogue index
    Session.set('dIndex', dIndex);
    // Initial text
    Session.set('text', dArray[dIndex].text.replace('{{name}}', name));
    Session.set('choices', convo.choices);
    Session.set('showBack', false);
    Session.set('actorName', actor.name);
    Session.set('actorMood', actor.mood);
    Session.setDefault('win', false);
});

Template.dialogue.onRendered( function() {
    $('body').on('keyup', function(e) {
        if (e.keyCode === 13) {
            // Same as NEXT button
            e.preventDefault();

            var dArray = Session.get('dArray');
            var dIndex = Session.get('dIndex');
            var actor = Router.current().data().actor;
            var actorName = actor.name.toLowerCase();

            Session.set('dIndex', dIndex + 1);
            if (dArray[dIndex].mood) {
                Session.set(actorName + 'Mood', dArray[dIndex].mood);
            }
        }
    });
});

Template.dialogue.helpers({
    response: function() {
        var dArray = Session.get('dArray');
        var dIndex = Session.get('dIndex');
        if (dArray.length > dIndex) {
            return dArray[dIndex].text.replace('{{name}}', Session.get('playerName'));
        }
    },
    speaking: function() {
        var dArray = Session.get('dArray');
        var dIndex = Session.get('dIndex');
        if (dArray.length > dIndex) {
            return dArray[dIndex].name;
        }
    },
    hasMore: function() {
        var dArray = Session.get('dArray');
        var dIndex = Session.get('dIndex');
        return dIndex < dArray.length;
    },
    choices: function() {
        return Session.get('choices');
    },
    showBack: function() {
        return Session.get('showBack');
    },
    actorName: function() {
        return Session.get('actorName');
    },
    actorMood: function() {
        var actor = Router.current().data().actor;
        var actorName = actor.name.toLowerCase();
        return Session.get(actorName + 'Mood');
    }
});

Template.dialogue.events({
    'click [data-hook="choice"]': function(e) {
        e.preventDefault();

        var text = $(e.target).text();
        var choices = Session.get('choices');
        var choice = $.grep(choices, function(e) {
            return e.text === text;
        })[0];

        //check whether a choice exists
        if (choice) {
            Session.set('dArray', choice.dialogue);
            Session.set('dIndex', 0);
            Session.set('text', Session.get('dArray')[0].text.replace('{{name}}', name));
            Session.set('choices', choice.choices);
        }

        var dArray = Session.get('dArray');
        var dIndex = Session.get('dIndex');
        var actor = Router.current().data().actor;
        var actorName = actor.name.toLowerCase();

        Session.set('dIndex', dIndex + 1);
        if (dArray[dIndex].mood) {
            Session.set(actorName + 'Mood', dArray[dIndex].mood);
        }
    },
    'click [data-hook=next]': function(e) {
        e.preventDefault();

        var dArray = Session.get('dArray');
        var dIndex = Session.get('dIndex');
        var actor = Router.current().data().actor;
        var actorName = actor.name.toLowerCase();

        Session.set('dIndex', dIndex + 1);
        if (dArray[dIndex].mood) {
            Session.set(actorName + 'Mood', dArray[dIndex].mood);
        }
    },
    'click [data-hook=back]': function(e) {
        var turns = Session.get('turns');

        if (turns - 1 === 0) {
            e.preventDefault();

            if (Session.equals('win', true)) {
                Router.go('win');
            } else {
                Router.go('lose');
            }
        } else {
            Session.set('turns', turns - 1);
        }
    }
});

Template.dialogue.onDestroyed( function() {
    $('body').off('keyup');
});