Template.dialogue.onRendered( function() {
    var convo = Router.current().data().convo;
    console.log(convo);
    Session.set('response', convo.greeting);
    Session.set('choices', convo.choices);
});

Template.dialogue.helpers({
    response: function() {
        return Session.get('response');
    },
    choices: function() {
        return Session.get('choices');
    }
});

Template.dialogue.events({
    'click [data-hook="choice"]': function(e) {
        var text = $(e.target).text();
        var choices = Session.get('choices');
        var choice = $.grep(choices, function(e) {
            return e.text === text;
        })[0];
        var response = choice.response;

        if (response) {
            Session.set('response', response.text);
            Session.set('choices', response.choices);
        } else {
            alert('Response not found');
        }
    }
});