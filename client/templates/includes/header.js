Template.layout.onRendered(function() {

});

Template.header.helpers({
    hasLogo: function() {
        var routeName = Router.current().route.getName();

        return (routeName === 'home' || routeName === 'login') && !Meteor.userId();
    }
});