Template.find.onRendered(function() {
    Session.set('gender', null);
    Session.set('stepOne', true);
    Session.set('stepTwo', false);
});

Template.find.helpers({
    updatedRecipients: function() {
        if (Session.get('gender')) {
            return Recipients.find(
                {$or: [ {gender: Session.get('gender')}, {gender: 'neutral'} ] },
                {limit: 11, sort: {giftCount: -1}}
            )
        }
    },
    stepOne: function() {
        return Session.get('stepOne');
    },
    stepTwo: function() {
        return Session.get('stepTwo');
    }
});

Template.find.events({
    'change [data-hook=gender]': function(e) {
        e.preventDefault();

        var gender = $(e.target).val();

        Session.set('gender', gender);

        // show next step if age has been selected
        if ($('[data-hook=recipient]').val() && $('[data-hook=age]').val() != 'Select age')
            Session.set('stepTwo', true);
    },
    'change [data-hook=recipient]': function(e) {
        e.preventDefault();

        var recipient = $(e.target).val();

        // show next step if age has been selected
        if ($('[data-hook=age]').val() != 'Select age')
            Session.set('stepTwo', true);
    },
    'change [data-hook=age]': function(e) {
        e.preventDefault();

        var age = $(e.target).val();

        // show next step if recipient has been selected
        if ($('[data-hook=recipient]').val())
            Session.set('stepTwo', true);
    }
});
