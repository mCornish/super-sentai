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

        Gifts.update(currentGiftId, {$set: giftProperties}, function(error) {
            if (error) {
                alert(error.reason);
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