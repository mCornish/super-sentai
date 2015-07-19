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
            case 10:
                turn = 1;
                break;
            case 9:
                turn = 1;
                break;
            case 8:
                turn = 2;
                break;
            case 7:
                turn = 2;
                break;
            case 6:
                turn = 3;
                break;
            case 5:
                turn = 3;
                break;
            case 4:
                turn = 4;
                break;
            case 3:
                turn = 4;
                break;
            case 2:
                turn = 5;
                break;
            case 1:
                turn = 5;
                break;
        }

        return turn;
    }
});

Template.actor.events({
    'click [data-hook="actor"]': function(e) {

    }
});