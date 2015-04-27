Template.giftSubmit.onCreated(function() {
    Session.set('giftSubmitErrors', {});
});
Template.giftSubmit.helpers({
    errorMessage: function(field) {
        return Session.get('giftSubmitErrors')[field];
    },
    errorClass: function(field) {
        return !!Session.get('giftSubmitErrors')[field] ? 'has-error' : '';
    }
});

Template.giftSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var gift = {
            title: $(e.target).find('[name=title]').val(),
            image: $(e.target).find('[name=image]').val(),
            link: $(e.target).find('[name=link]').val(),
            // Use parse to convert strings to numbers
            price: parseFloat( $(e.target).find('[name=price]').val() ),
            age: parseInt( $(e.target).find('[name=age]').val() )
        };

        var errors = validateGift(gift);
        if (errors.title || errors.image)
            return Session.set('giftSubmitErrors', errors);

        Meteor.call('giftInsert', gift, function(error, result) {
            if (error)
                return throwError(error.reason);
            Router.go('giftPage', {_id: result._id});
        });
    }
});