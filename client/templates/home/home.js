Template.home.helpers({
    name: function() {
        return Meteor.user().username || Meteor.user().profile.name;
    }
});

Template.home.events({
    'click [data-hook="start"]': function(e) {
        e.preventDefault();
    },
    'click [data-hook="options"]': function(e) {
        e.preventDefault();
    }
});