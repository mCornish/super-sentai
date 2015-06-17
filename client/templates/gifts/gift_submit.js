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
            description: $(e.target).find('[name=description]').val(),
            link: $(e.target).find('[name=link]').val(),
            // Use parse to convert strings to numbers
            price: parseFloat( $(e.target).find('[name=price]').val() ),
            recipient: $(e.target).find('[name=recipient]').val(),
            age: parseInt( $(e.target).find('[name=age]').val() ),
            occasion: $(e.target).find('[name=occasion]').val()
        };

        var errors = validateGift(gift);
        if (errors.title || errors.image)
            return Session.set('giftSubmitErrors', errors);

        Meteor.call('giftInsert', gift, function(error, result) {
            if (error)
                return throwError(error.reason);
            Router.go('giftPage', {_id: result._id});
        });
    },
    'click [data-hook=submit-cancel]': function(e) {
        e.preventDefault();

        var isCanceled = window.confirm('Are you sure you want to cancel your submission?');

        if (isCanceled) {
            window.location = '/';
        }
    }
});