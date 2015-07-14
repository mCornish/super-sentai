Template.actor.helpers({
    actorMood: function() {
        var actorName = this.name.toLocaleLowerCase();
        return Session.get(actorName + 'Mood');
    }
});

Template.actor.events({
    'click [data-hook="actor"]': function(e) {

    }
});