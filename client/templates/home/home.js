Template.home.helpers({
    name: function() {
        return Meteor.user().username || Meteor.user().profile.name;
    },
    avatar: function() {
        return Meteor.user().profile.image || 'http://thesocietypages.org/socimages/files/2009/05/vimeo.jpg';
    },
    haveRecommendations: function() {
        var gifts = Router.current().data().gifts;
        return gifts.count() > 0;
    },
    haveWants: function() {
        var gifts = Router.current().data().wants;
        return gifts.count() > 0;
    }
});

Template.home.events({
    'click [data-hook="log-out"]': function(e) {
        e.preventDefault();

        Meteor.logout(function(error) {
            if (error) {
                alert(error.reason);
            }
        });
    }
});