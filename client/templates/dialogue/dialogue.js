Template.dialogue.onRendered( function() {
    var convo = Router.current().data().convo;
    console.log(convo);
    Session.set('response', convo.greeting);
    Session.set('choices', convo.choices);
    Session.set('showBack', false);
});

Template.dialogue.helpers({
    response: function() {
        return Session.get('response');
    },
    choices: function() {
        return Session.get('choices');
    },
    showBack: function() {
        return Session.get('showBack');
    }
});

Template.dialogue.events({
    'click [data-hook="choice"]': function(e) {
        var text = $(e.target).text();
        var choices = Session.get('choices');
        var choice = $.grep(choices, function(e) {
            return e.text === text;
        })[0];

        //check whether a choice exists
        if (choice) {
            var response = choice.response;

            if (response) {
                Session.set('response', response.text);
                Session.set('choices', response.choices);
            } else {
                alert('Response not found');
            }
        } else {  // otherwise show the back button
            Session.set('showBack', true);
        }
    }
});