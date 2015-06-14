Template.layout.onRendered(function() {

});

Template.header.helpers({
    logoSize: function() {
        var routeName = Router.current().route.getName();

        return (routeName === 'home' || routeName === 'login') && !Meteor.userId() ? '' : 'logo--small';
    }
});