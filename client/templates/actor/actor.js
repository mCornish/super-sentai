Template.actor.helpers({
    actorMood: function() {
        var actorName = this.name.toLocaleLowerCase();
        return Session.get(actorName + 'Mood');
    },
    _id: function() {
        return this._id;
    },
    turn: function() {
        var turnsLeft = Session.get('turns');
        var turn;

        return turn;
    }
});

Template.actor.events({
    'click [data-hook="actor"]': function(e) {

    }
});