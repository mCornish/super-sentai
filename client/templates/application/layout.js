Template.layout.onRendered(function() {

});

Template.layout.helpers({
    showHud: function() {
        return Session.get('showHud');
    }
});