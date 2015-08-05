Template.actor.helpers({
    actorMood: function() {
        var actorName = this.name.toLocaleLowerCase();
        return Session.get(actorName + 'Mood');
    },
    _id: function() {
        return this._id;
    },
    turn: function() {
        var turn;
        var turnsLeft = Session.get('turns');
        switch (turnsLeft) {
            case 6:
                turn = 1;
                break;
            case 5:
                turn = 1;
                break;
            case 4:
                turn = 2;
                break;
            case 3:
                turn = 2;
                break;
            case 2:
                turn = 3;
                break;
            case 1:
                turn = 3;
                break;
        }

        return turn;
    }
});

Template.actor.events({
    'click [data-hook="actor"]': function(e) {

    }
});