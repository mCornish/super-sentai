Template.stage.helpers({

});

Template.stage.events({
    'ended [data-hook="intro-video"]': function(e) {
        e.preventDefault();
        var $cutscene = $(e.target).parent();

        $cutscene.hide();
    },
    'click [data-hook="skip"]': function(e) {
        e.preventDefault();
        var $cutscene = $(e.target).parent();

        $cutscene.hide();
    }
});