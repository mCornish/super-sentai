Template.giftEdit.onCreated(function() {
    Session.set('giftEditErrors', {});
});
Template.giftEdit.helpers({
    errorMessage: function(field) {
        return Session.get('giftEditErrors')[field];
    },
    errorClass: function(field) {
        return !!Session.get('giftEditErrors')[field] ? 'has-error' : '';
    }
});

Template.giftEdit.events({
    'submit form': function(e) {
        e.preventDefault();

        var currentGiftId = this._id;

        var giftProperties = {
            title: $(e.target).find('[name=title]').val(),
            image: $(e.target).find('[name=image]').val(),
            link: $(e.target).find('[name=link]').val(),
            // Use parse to convert string values to numbers
            price: parseFloat( $(e.target).find('[name=price]').val() ),
            age: parseInt( $(e.target).find('[name=age]').val() )
        };

        var errors = validateGift(gift);
        if (errors.title || errors.image)
            return Session.set('giftSubmitErrors', errors);

        Gifts.update(currentGiftId, {$set: giftProperties}, function(error) {
            if (error) {
                throwError(error.reason);
            } else {
                Router.go('giftPage', {_id: currentGiftId});
            }
        });
    },

    'click [data-hook="delete"]': function(e) {
        e.preventDefault();

        if (confirm("Delete this gift?")) {
            var currentGiftId = this._id;
            Gifts.remove(currentGiftId);
            Router.go('giftsList');
        }
    }
});