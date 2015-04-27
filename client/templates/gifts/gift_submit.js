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

        Meteor.call('giftInsert', gift, function(error, result) {
            if (error)
                return alert(error.reason);
            Router.go('giftPage', {_id: result._id});
        });
    }
});