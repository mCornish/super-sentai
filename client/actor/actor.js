Template.actor.helpers({
    name: function() {
        return Meteor.user().username || Meteor.user().profile.name;
    }
});

Template.actor.events({
    'click [data-hook="actor"]': function(e) {

    }
});